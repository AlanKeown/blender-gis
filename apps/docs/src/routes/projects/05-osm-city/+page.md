---
title: 05 Extruded city from OSM and local footprints
---

|                             |                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------- |
| **Group**                   | Urban & site                                                                                    |
| **Showcases**               | Vector import; attribute-driven extrusion; context modelling                                    |
| **Level**                   | Introductory                                                                                    |
| **Status**                  | Planned                                                                                         |
| **Data**                    | OpenStreetMap buildings, roads and landuse; optional authoritative footprints with heights; DEM |
| **Tools**                   | QGIS (QuickOSM), BlenderGIS or Blosm, Geometry Nodes                                            |
| **Suggested code location** | `projects/05-osm-city/`                                                                         |

## Goal

Build a renderable 3D model of a town centre where building heights come from `height` or `building:levels` tags (or an authoritative height attribute), sitting correctly on terrain.

## Why Blender

It shows the core BlenderGIS/Blosm workflow and the step up from a 2D map to an orbitable model.

## Workflow

1. **GIS:** fetch buildings with QuickOSM; compute a numeric `height_m` field (height → levels × 3 m → default); reproject and export to Shapefile (BlenderGIS's vector import format).
2. **Blender:** import with BlenderGIS using `height_m` as the extrusion field, or import flat and extrude in Geometry Nodes from the attribute.
3. Drop buildings onto the terrain (BlenderGIS _drop to ground_) and import roads as curves with a width per class.
4. Style: a muted context palette with landuse polygons as a ground texture; render aerial obliques and a short orbit.

## Key techniques

- Attribute → extrusion
- Drop objects to terrain
- Curve roads with width by class
- Collections per layer

## Pitfalls

- OSM height coverage is patchy, so show which heights are estimated
- Buildings on slopes need their base at the lowest terrain point

## Outputs

Oblique stills, orbit MP4; attribution “© OpenStreetMap contributors”

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
