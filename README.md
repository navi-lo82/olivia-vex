# Olivia Monroe's Vexillology

Prototype fan project

A pin-map of Olimpian flags on the world map. This code auto generates `.js`
code and assets given flag submissions and configs.

## How to set up

Create a virtual environment and install requirements

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Where to store flags

Store `.webp` images in `assets`. Try to keep them under 100 kB each. The
information for each flag is stored in `config.yaml`

## How to run

Activate the virtual environment and run the code

```bash
source venv/bin/activate
python main.py
```

This will auto generate `.js` code and assets located in `assets/`

## Other information

[Kissimmee's boundary](https://kissimmee-gis-web-1-1-kissgis.hub.arcgis.com/)
