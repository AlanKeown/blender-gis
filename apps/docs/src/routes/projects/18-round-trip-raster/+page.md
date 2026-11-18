---
title: '18 Round-trip: Blender render back into GIS'
---

|                             |                                                                  |
| --------------------------- | ---------------------------------------------------------------- |
| **Group**                   | Pipelines & publishing                                           |
| **Showcases**               | Georeferenced render output; Blender as a raster-production step |
| **Level**                   | Intermediate                                                     |
| **Status**                  | Planned                                                          |
| **Data**                    | Project 01 scene                                                 |
| **Tools**                   | BlenderGIS (georeferenced camera + render), QGIS                 |
| **Suggested code location** | `projects/18-round-trip-raster/`                                 |

## Goal

Render the shaded relief from a BlenderGIS georeferenced orthographic camera, load it into QGIS, and verify the alignment against the source DEM and vector layers.

## Why Blender

It closes the loop: Blender becomes a cartographic raster engine whose output is a first-class GIS layer.

## Workflow

1. Use BlenderGIS to set a georeferenced camera for the scene extent.
2. Render, and write the world file / GeoTIFF georeferencing via BlenderGIS.
3. Load into QGIS; measure offsets at control points (should be well under one pixel).
4. Use it as a basemap layer in a QGIS print layout.

## Key techniques

- Georeferenced camera
- Pixel-accurate ortho scale

## Pitfalls

- Any camera shift, overscan or lens shift breaks the georeferencing

## Outputs

GeoTIFF relief + a QGIS layout PDF

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
