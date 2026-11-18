---
title: 16 Headless, config-driven batch rendering
---

|                             |                                                                            |
| --------------------------- | -------------------------------------------------------------------------- |
| **Group**                   | Pipelines & publishing                                                     |
| **Showcases**               | Reproducibility: the same script renders any AOI from a TOML config        |
| **Level**                   | Advanced                                                                   |
| **Status**                  | Planned                                                                    |
| **Data**                    | A list of AOIs (GeoPackage) and the DEM/imagery sources used in project 01 |
| **Tools**                   | WSL geo stack, Blender `-b` (Windows or WSL), `bpy` module (optional)      |
| **Suggested code location** | `projects/16-headless-batch/`                                              |

## Goal

One command that, for each AOI in a GeoPackage, prepares inputs (GDAL), builds the scene (bpy), renders a relief still and a turntable, and writes a manifest.

## Why Blender

It turns Blender from a manual tool into a pipeline component, which is the bridge to enterprise use (e.g. scheduled or per-region deliverables).

## Workflow

1. A preparation script (e.g. `prepare_aoi.py`): clip and reproject per AOI → `derived/<aoi>/`.
2. A Blender build script (e.g. `build_scene.py`): reads `config.toml`, builds the scene from scratch (no saved .blend dependency), and renders.
3. Driver script: loop AOIs, call `blender -b -P build_scene.py -- --config …`, collect logs and timings into `manifest.json`.
4. Run the same thing in CI on a small sample to prove it works without a GUI.

## Key techniques

- `argparse` after `--` in Blender
- Scene-from-script (no hidden state)
- GPU device selection in scripts

## Pitfalls

- EEVEE needs a GPU display context, so use Cycles for headless jobs in WSL/CI
- Pin Blender and add-on versions in the manifest

## Outputs

A folder of renders plus manifest.json

## Results

> **Not built yet**
>
> When this project is built, record the results here: a hero image, any animation or
> interactive embed, and a short write-up of what worked.

## Data and licences

| Dataset           | Source | Licence |
| ----------------- | ------ | ------- |
| _to be completed_ |        |         |

## Notes

_Build log, settings that mattered, and any AI-assisted steps._
