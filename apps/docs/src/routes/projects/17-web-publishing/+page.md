---
title: 17 Publishing 3D to the web
---

| | |
|---|---|
| **Group** | Pipelines & publishing |
| **Showcases** | glTF/GLB export for browser viewers; comparison with Qgis2threejs |
| **Level** | Intermediate |
| **Status** | Planned |
| **Data** | The project 02 diorama or project 05 city |
| **Tools** | Blender glTF exporter (Draco/meshopt compression), `<model-viewer>` or three.js, QGIS Qgis2threejs |
| **Suggested code location** | `projects/17-web-publishing/` |

## Goal

Embed interactive 3D versions of selected projects in the SvelteKit demo site, and compare a Blender-authored GLB against a Qgis2threejs export of the same data.

## Why Blender

It is how results reach people who won't open Blender, and it shows the trade-off between the convenience of a GIS export and Blender's control.

## Workflow

1. Decimate and bake materials to textures; keep the GLB under ~15 MB.
2. Export GLB with compression; ship a `*.georef.json` sidecar with the CRS and origin.
3. Embed in the demo site, e.g. with `<model-viewer>`, or with three.js (or a Svelte wrapper such as Threlte) in a Svelte component.
4. Export the same scene with Qgis2threejs (glTF or web export) and compare size, fidelity and effort.

## Key techniques

- Texture baking
- glTF compression
- LOD

## Pitfalls

- glTF has no CRS, so the sidecar is essential for reuse
- Large textures dominate download size

## Outputs

Interactive embeds on the site

## Results

> **Not built yet**
>
> When this project is built, record the results here: a hero image, any animation or
> interactive embed, and a short write-up of what worked.

## Data and licences

| Dataset | Source | Licence |
|---|---|---|
| _to be completed_ | | |

## Notes

_Build log, settings that mattered, and any AI-assisted steps._
