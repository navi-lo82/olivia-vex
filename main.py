"""Auto generate `js` code and assets for displaying flags in `index.html`

Auto generate `js` code and assets for displaying flags in `index.html` by
reading flag images in the `ASSETS_DIR` directory and the config file
`CONFIG_FILE`

The config file has information about each flag as a list. For each flag, it
should have the following keys:

- `file`: The file name of the flag image in the `ASSETS_DIR` directory
- `title`: The title of the flag, ensure it is js friendly by using escape
      characters when needed
- `author`: The author of the flag, ensure it is js friendly by using escape
      characters when needed
- `text`: The text of the flag, ensure it is js friendly by using escape
      characters when needed
- `type`: The type of the flag - "International", "Europe", "North America",
      "South America", "Africa", "Asia" or "Oceania"
- `coordinates`: The coordinates of the flag if it is not an international flag

For each international flag, a random coordinate within the shape of
`INTERNATIONAL_GEOMETRY_FILE` are added

For each flag, each flag is resized to an approriate size for the web. Also
another image is made by adding a flag pole to the resized flag. These images
are saved in the `ASSETS_DIR` directory

The js code for displaying flags in `index.html` is also generated using the
modified images in the `ASSETS_DIR` directory
"""

from os import path

import PIL.Image
import PIL.ImageDraw
import geopandas as gpd
from shapely import geometry
from numpy import random
import yaml


SEED = 69951084179381307589558274648595550906
START_COOD = [28.2956, -81.4039]
START_ZOOM = 10
RESIZE_WIDTH = 800
FLAG_POLE_HEIGHT = 1000
FLAG_POLE_WIDTH = 30
ICON_SIZE = [200, 250]
POLE_COLOUR = (50, 50, 50)
INTERNATIONAL_GEOMETRY_FILE = path.join("kissimmee", "climitspoly.shp")
CONFIG_FILE = "config.yaml"
MAP_JS_FILE = "map.js"
GALLERY_JS_FILE = "gallery.js"
ASSETS_DIR = "assets"


def read_config():
    """Read the config file of flags

    Read the config file of flags and return a dictionary of flag configs

    Returns:
        dict: Dictionary of flag configs
    """
    with open(CONFIG_FILE, "r") as file:
        return yaml.safe_load(file)


def add_international_cood(config, rng):
    """Add random coordinate for international flags

    Add random coordinates for every international flag in config. Coordinates
    are sampled from a geometry file. The coordinates are saved for each config
    with the key "coordinates"

    Args:
        config (dict): Dictionary of flag configs. Each international flag in
            this dictionary is modified
        rng (numpy.random._generator.Generator): random number generated
    """
    gdf = gpd.read_file(INTERNATIONAL_GEOMETRY_FILE)
    gdf = gdf.to_crs("EPSG:4326")

    polygon = gdf.geometry.iloc[0]

    for config_i in config:
        # check if it is a international flag
        if config_i["type"] != "International":
            continue

        # rejection sampling
        min_x, min_y, max_x, max_y = polygon.bounds
        while True:
            point = geometry.Point(
                rng.uniform(min_x, max_x), rng.uniform(min_y, max_y)
            )
            if polygon.contains(point):
                latitude = point.y
                longitude = point.x

                config_i["coordinates"] = [latitude, longitude]
                break


def resize_images(config):
    """Resize every flag in the config

    Resize every flag in the config and save them in the assets. For each flag,
    the location of the resized images are also saved in the config using the
    key "resize-file"

    Args:
        config (dict): Dictionary of flag configs. Each flag in this dictionary
            is modified
    """
    for config_i in config:
        flag_file = config_i["file"]
        img = PIL.Image.open(path.join(ASSETS_DIR, flag_file))

        # resize, keeping the ratio
        scale = RESIZE_WIDTH / img.width
        resize_height = int(img.height * scale)
        img = img.resize((RESIZE_WIDTH, resize_height), PIL.Image.LANCZOS)

        resize_file = flag_file.split(".")[0]  # remove the file extension
        resize_file = f"{resize_file}-resize.webp"  # append to file name
        config_i["resize-file"] = resize_file
        img.save(path.join(ASSETS_DIR, resize_file))


def add_flag_pole(config):
    """Add a flag pole to each flag in the config

    Add a flag pole to each resized flag in the config and save them in the
    assets. For each flag, the location of the flags with a pole are also saved
    in the config using the key "pole-file"

    Requires the function `resize_images(config)` to be run beforehand

    Args:
        config (dict): Dictionary of flag configs. Each flag in this dictionary
            is modified
    """
    for config_i in config:
        # file name of the flag with pole
        pole_file = f"{config_i['file'].split('.')[0]}-pole.webp"
        config_i["pole-file"] = pole_file

        # use the resized flag
        img = PIL.Image.open(path.join(ASSETS_DIR, config_i["resize-file"]))

        # create blank transparent image
        new_width = img.width + FLAG_POLE_WIDTH
        new_img = PIL.Image.new(
            "RGBA", (new_width, FLAG_POLE_HEIGHT), (0, 0, 0, 0)
        )

        # paste the original image next to the flag pole
        new_img.paste(img, (FLAG_POLE_WIDTH, 0))
        draw = PIL.ImageDraw.Draw(new_img)
        draw.rectangle([0, 0, FLAG_POLE_WIDTH, FLAG_POLE_HEIGHT], POLE_COLOUR)

        # save the result
        new_img.save(path.join(ASSETS_DIR, pole_file))


def write_map_js(config):
    """Auto generate the `MAP_JS_FILE` file

    Auto generate the `MAP_JS_FILE` file which displays the Leaflet map with
    flags. It adds the flag (with poles) to the map and a pop up displaying the
    title, text and author

    Requires the functions `resize_images(config)`, `add_flag_pole(config)` and
    `add_international_cood(config)` to be run beforehand

    Args:
        config (dict): Dictionary of flag configs
    """
    with open(MAP_JS_FILE, "w") as file:
        # js code for Leaflet
        file.write(
            f"const map = L.map('map').setView({START_COOD}, {START_ZOOM});\n"
        )
        file.write(
            "L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {\n"
        )
        file.write(
            """  attribution: `&copy;
            <a href=\"https://www.openstreetmap.org/copyright\">
            OpenStreetMap
            </a> contributors`\n"""
        )
        file.write("}).addTo(map);\n\n")

        # for each flag, add a pop up
        for config_i in config:
            js_var = config_i["file"].split(".")[0]
            flag_file = config_i["pole-file"]
            file.write(f"const {js_var} = L.Icon.extend(")
            file.write("{\n")
            file.write("  options: {\n")
            file.write(f"    iconUrl: '{path.join(ASSETS_DIR, flag_file)}',\n")
            file.write(f"    iconSize: {ICON_SIZE},\n")
            file.write(f"    iconAnchor: {[0, ICON_SIZE[1]]},\n")
            file.write(
                f"    popupAnchor: {[ICON_SIZE[0] / 2, -ICON_SIZE[1]]},\n"
            )
            file.write("  }\n});\n")

            # put html code within bindPopup
            file.write(f"L.marker({config_i['coordinates']},\n")
            file.write("  { icon: new ")
            file.write(js_var)
            file.write("() })\n")
            file.write("  .bindPopup(\n    '")
            file.write("<b>")
            file.write(config_i["title"])
            file.write("</b><br><br>")
            file.write(config_i["text"])
            file.write("<br><br>")
            file.write(" - ")
            file.write(config_i["author"])
            file.write("'\n  ).addTo(map);\n\n")


def write_gallery_js(config):
    """Auto generate the `GALLERY_JS_FILE` file

    Auto generate the `GALLERY_JS_FILE` file which inserts html code for
    displaying flags in `index.html`

    Requires the function `resize_images(config)` to be run beforehand

    Args:
        config (dict): Dictionary of flag configs
    """
    # create a dictionary of flag types, eg "International", "Europe"
    html_dict = {}

    # for each flag
    for config_i in config:
        # check if this type of flag is in html_dict, if it isn't add it
        # modify the string to make it consistent with the html class names
        type = config_i["type"].lower().replace(" ", "-")
        if type not in html_dict:
            html_dict[type] = []  # empty list, for appending flag html code

        # html code for displaying this flag
        html = (
            f'<div class="w3-third w3-container w3-margin-bottom">\n'
            f'<img src="{path.join(ASSETS_DIR, config_i["resize-file"])}" '
            'style="width:100%">\n'
            f'<div class="w3-container w3-white">\n'
            f"<p><b>{config_i['title']}</b></p>\n"
            f"<p>{config_i['text']}</p>\n"
            f"<p><b>- {config_i['author']}</b></p>\n"
            "</div>\n</div>\n"
        )
        html_dict[type].append(html)

    # write js code
    with open(GALLERY_JS_FILE, "w") as file:
        for type in html_dict:
            file.write(f'document.getElementById("{type}").innerHTML = \n')
            file.write("`")
            for html in html_dict[type]:
                file.write(html)
            file.write("`;\n")


if __name__ == "__main__":
    # use rng to suffle the flag entries in random order
    rng = random.default_rng(SEED)
    config = read_config()
    resize_images(config)
    add_flag_pole(config)
    add_international_cood(config, rng)
    rng.shuffle(config)
    write_map_js(config)
    rng.shuffle(config)
    write_gallery_js(config)
