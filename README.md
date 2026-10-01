# Olivia Monroe's Vexillology

A pin-map of Olimpian flags on the world map. This code generates `.html` files,
`.js` files and assets for the website to display the map of flags as well as
a gallery.

## How to set up

Create a virtual environment and install requirements

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Where to store flags

Submitted flags are to be stored in `submissions/`. Try to keep them about under
100 kB each. The information for each flag is stored in `config.yaml`. These
will be processed by the code

## How to run

Activate the virtual environment and run the code

```bash
source venv/bin/activate
python main.py
```

This will generate the code and assets in `docs/`

## How to view

When testing, run a `http` server and access the website through that

```bash
python -m http.server 8000
```

and visit `http://localhost:8000/docs/` in a browser

## GitHub Pages

The website is hosted using GitHub pages at
https://navi-lo82.github.io/olivia-vex/

In terms of workflow, all generated files and assets shall be not included in
the `main` branch. Instead, they should be in the `build` branch which GitHub
pages will read from.

The `build` branch is only for hosting the website and should not be used for
development as commits may be forcefully pushed.

## Other Information and Credits

- [Kissimmee's boundary](https://kissimmee-gis-web-1-1-kissgis.hub.arcgis.com/)
- [Favicon](https://favicon.io/emoji-favicons/sparkles/)
- [GitHub logo](https://www.flaticon.com/free-icon/github-logo_25231)
