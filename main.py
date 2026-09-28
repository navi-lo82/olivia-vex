"""Generate the `html`code, `js` code and assets for the flag website

Provide submitted flags in the `SUBMISSIONS_DIR` directory along with
information about each flag in the `CONFIG_FILE`.For each flag, it should have
the following keys:

- `file`: The file name of the flag image in the `SUBMISSIONS_DIR` directory
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

This code uses the provided `INDEX_TEMPLATE_FILE` `html` file and modifies it to
contain images of the flags and the Leaflet map. It will do the following:

- Generate `INDEX_FILE` `html` file in `HTML_DIR` for the website. This file
  contains the flags and poles in a Leaflet map. It also contains all of the
  flags in a gallery format
- Each flag is resized to an approriate size for the web. Also another image is
  made by adding a flag pole to the resized flag. These images are saved in the
  `HTML_DIR/ASSETS_DIR` directory and used by the `INDEX_FILE` `html` file
- Generate `HTML_DIR/ MAP_JS_FILE` which contains the js code for displaying the
  Leaflet map in the `INDEX_FILE` `html` file
"""

import os

import PIL.Image
import PIL.ImageDraw
import bs4
import bs4.formatter
import geopandas as gpd
from shapely import geometry
from numpy import random
import yaml

SEED = 69951084179381307589558274648595550906  # for rng
START_COOD = [28.2956, -81.4039]  # start coordinates for the Leaflet map
START_ZOOM = 10  # start zoom parameter for the Leaflet map
RESIZE_WIDTH = 800  # width of the image asset to resize to
FLAG_POLE_HEIGHT = (
    1000  # height of the pole in the flag Leaflet image in pixels
)
FLAG_POLE_WIDTH = 30  # width of the pole in the flag Leaflet image in pixels
POLE_COLOUR = (50, 50, 50)  # colour of the pole in RGB
ICON_SIZE = [200, 250]  # size of the flag in the Leaflet map
INTERNATIONAL_GEOMETRY_FILE = os.path.join(
    "kissimmee", "climitspoly.shp"
)  # file location of the shape of the international land
INDEX_TEMPLATE_FILE = os.path.join("template", "index.html")
SUBMISSIONS_DIR = "submissions"
CONFIG_FILE = "config.yaml"
HTML_DIR = "html"
ASSETS_DIR = "assets"
INDEX_FILE = "index.html"
MAP_JS_FILE = "map.js"
FLAG_TYPES = [
    "International",
    "Europe",
    "North America",
    "South America",
    "Africa",
    "Asia",
    "Oceania",
]


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
        img = PIL.Image.open(os.path.join(SUBMISSIONS_DIR, flag_file))

        # resize, keeping the ratio
        scale = RESIZE_WIDTH / img.width
        resize_height = int(img.height * scale)
        img = img.resize((RESIZE_WIDTH, resize_height), PIL.Image.LANCZOS)

        resize_file = flag_file.split(".")[0]  # remove the file extension
        resize_file = f"{resize_file}-resize.webp"  # append to file name
        config_i["resize-file"] = resize_file
        img.save(os.path.join(HTML_DIR, ASSETS_DIR, resize_file))


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
        img = PIL.Image.open(
            os.path.join(HTML_DIR, ASSETS_DIR, config_i["resize-file"])
        )

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
        new_img.save(os.path.join(HTML_DIR, ASSETS_DIR, pole_file))


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
    with open(os.path.join(HTML_DIR, MAP_JS_FILE), "w") as file:
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

        file.write("map.addControl(new L.Control.FullScreen());\n")

        # for each flag, add a pop up
        for config_i in config:
            js_var = config_i["file"].split(".")[0]
            flag_file = config_i["pole-file"]
            file.write(f"const {js_var} = L.Icon.extend(")
            file.write("{\n")
            file.write("  options: {\n")
            file.write(
                f"    iconUrl: '{os.path.join(ASSETS_DIR, flag_file)}',\n"
            )
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
            file.write(add_escape(config_i["title"]))
            file.write("</b><br><br>")
            file.write(add_escape(config_i["text"]))
            file.write("<br><br>")
            file.write(" - ")
            file.write(add_escape(config_i["author"]))
            file.write("'\n  ).addTo(map);\n\n")


def add_escape(str):
    return str.replace("'", "\\'").replace('"', '\\"')


def flag_type_to_id(flag):
    return flag.lower().replace(" ", "-")


def write_index(config):
    """Auto generate the `GALLERY_JS_FILE` file

    Auto generate the `GALLERY_JS_FILE` file which inserts html code for
    displaying flags in `index.html`

    Requires the function `resize_images(config)` to be run beforehand

    Args:
        config (dict): Dictionary of flag configs
    """
    # create a dictionary of flag types, eg "International", "Europe"
    html_dict = {}

    flag_types_id = [flag_type_to_id(type) for type in FLAG_TYPES]

    # for each flag
    for config_i in config:
        # check if this type of flag is in html_dict, if it isn't add it
        # modify the string to make it consistent with the html class names
        type = flag_type_to_id(config_i["type"])
        if type not in html_dict:
            html_dict[type] = []  # empty list, for appending flag html code

        # html code for displaying this flag
        html = (
            f"<figure>\n"
            f'<img src="{os.path.join(ASSETS_DIR, config_i["resize-file"])}"> '
            "\n"
            f"<figcaption>\n"
            f"<strong>{config_i['title']}</strong>\n"
            f"<p class='caption'>{config_i['text']}</p>\n"
            f"<p class='author'>- {config_i['author']}</p>\n"
            "</figcaption>\n</figure>\n"
        )
        html_dict[type].append(html)

    with open(INDEX_TEMPLATE_FILE) as index_template:
        soup = bs4.BeautifulSoup(index_template, "html.parser")

    for type, html_list in html_dict.items():
        container = soup.find(id=type).find(class_="grid")
        container.clear()
        for html in html_list:
            container.append(bs4.BeautifulSoup(html, "html.parser"))

    # remove un-used flag types and links to them
    for flag_type_id in flag_types_id:
        if flag_type_id not in html_dict:
            soup.find(id=flag_type_id).decompose()
            # remove all links
            for i in soup.find_all("a", href=f"#{flag_type_id}"):
                i.decompose()

    # required to remove trailing slashes
    html5_strict = bs4.formatter.HTMLFormatter(void_element_close_prefix=None)
    html = soup.decode(formatter=html5_strict)

    with open(
        os.path.join("html", "index.html"), "w", encoding="utf-8"
    ) as file:
        file.write(html)


if __name__ == "__main__":
    # use rng to suffle the flag entries in random order
    rng = random.default_rng(SEED)
    config = read_config()
    os.makedirs(os.path.join(HTML_DIR, ASSETS_DIR), exist_ok=True)
    resize_images(config)
    add_flag_pole(config)
    add_international_cood(config, rng)
    rng.shuffle(config)
    write_map_js(config)
    rng.shuffle(config)
    write_index(config)
