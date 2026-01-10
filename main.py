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


def add_international_cood(config, rng):
    gdf = gpd.read_file(INTERNATIONAL_GEOMETRY_FILE)
    gdf = gdf.to_crs("EPSG:4326")

    polygon = gdf.geometry.iloc[0]

    for config_i in config:
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


def read_config():
    with open(CONFIG_FILE, "r") as file:
        return yaml.safe_load(file)


def resize_images(config):
    for config_i in config:
        flag_file = config_i["file"]
        img = PIL.Image.open(path.join(ASSETS_DIR, flag_file))

        scale = RESIZE_WIDTH / img.width
        resize_height = int(img.height * scale)
        img = img.resize((RESIZE_WIDTH, resize_height), PIL.Image.LANCZOS)

        resize_file = flag_file.split(".")[0]
        resize_file = f"{resize_file}-resize.webp"
        config_i["resize-file"] = resize_file
        img.save(path.join(ASSETS_DIR, resize_file))


def add_flag_pole(config):
    for config_i in config:
        flag_file = config_i["resize-file"]
        pole_file = f"{config_i['file'].split('.')[0]}-pole.webp"
        config_i["pole-file"] = pole_file

        img = PIL.Image.open(path.join(ASSETS_DIR, flag_file))

        new_width = img.width + FLAG_POLE_WIDTH
        new_img = PIL.Image.new(
            "RGBA", (new_width, FLAG_POLE_HEIGHT), (0, 0, 0, 0)
        )

        # Paste the original image next to the flag pole
        new_img.paste(img, (FLAG_POLE_WIDTH, 0))
        draw = PIL.ImageDraw.Draw(new_img)
        draw.rectangle([0, 0, FLAG_POLE_WIDTH, FLAG_POLE_HEIGHT], POLE_COLOUR)

        # Save the result
        new_img.save(path.join(ASSETS_DIR, pole_file))


def write_map_js(config):
    with open(MAP_JS_FILE, "w") as file:
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
    html_dict = {}
    for config_i in config:
        type = config_i["type"].lower().replace(" ", "-")
        if type not in html_dict:
            html_dict[type] = []

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

    with open(GALLERY_JS_FILE, "w") as file:
        for type in html_dict:
            file.write(f'document.getElementById("{type}").innerHTML = \n')
            file.write("`")
            for html in html_dict[type]:
                file.write(html)
            file.write("`;\n")


if __name__ == "__main__":
    rng = random.default_rng(SEED)
    config = read_config()
    resize_images(config)
    add_flag_pole(config)
    add_international_cood(config, rng)
    rng.shuffle(config)
    write_map_js(config)
    rng.shuffle(config)
    write_gallery_js(config)
