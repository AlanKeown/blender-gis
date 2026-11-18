---
title: 11 Rule-based vegetation and rocks
---

| | |
|---|---|
| **Group** | Analysis you can see |
| **Showcases** | Geometry Nodes scattering from slope, elevation and raster attributes |
| **Level** | Advanced |
| **Status** | Planned |
| **Data** | DEM; land cover / vegetation classes; optional moisture or TWI raster |
| **Tools** | QGIS, Blender Geometry Nodes, asset library (e.g. Poly Haven or Blender's online asset libraries) |
| **Suggested code location** | `projects/11-procedural-vegetation/` |

## Goal

Populate a landscape with trees, shrubs and rocks whose type and density follow explicit rules (e.g. trees below the treeline where slope < 30°, density scaled by TWI; scree on steep slopes).

## Why Blender

It turns a classified raster into a believable landscape, and the rules are inspectable and editable as nodes.

## Workflow

1. **GIS:** derive slope, TWI and class rasters at the same extent; encode classes as integers.
2. **Blender:** sample the rasters onto the terrain (Image Texture in Geometry Nodes using UVs, or attributes written by script).
3. *Distribute Points on Faces* with density from the rules; *Instance on Points* from a collection per class; randomise scale and rotation.
4. Use *Realize Instances* only for export; keep instances for rendering.

## Key techniques

- Raster → attribute sampling
- Density fields
- Instancing at scale

## Pitfalls

- Instance counts explode, so use viewport density limits
- Ecologically implausible rules look wrong, so cite the logic used

## Outputs

Landscape stills; a diagram of the rule graph

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
