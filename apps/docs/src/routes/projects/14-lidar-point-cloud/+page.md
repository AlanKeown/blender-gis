---
title: 14 LiDAR point-cloud visualisation
---

| | |
|---|---|
| **Group** | Analysis you can see |
| **Showcases** | LAS/LAZ into native point clouds; colour by classification or intensity |
| **Level** | Intermediate |
| **Status** | Planned |
| **Data** | Classified LAS/LAZ (e.g. state LiDAR tiles via ELVIS) |
| **Tools** | PDAL (WSL), Blender 5.1+ with Point Cloud IO, Geometry Nodes |
| **Suggested code location** | `projects/14-lidar-point-cloud/` |

## Goal

Render a LiDAR tile as points coloured by classification, then reveal a mesh of the ground class underneath, as an explainer of what LiDAR captures.

## Why Blender

It shows Blender's native point-cloud object and attribute-driven point shading, and makes LiDAR intuitive to non-specialists.

## Workflow

1. **WSL:** PDAL pipeline to crop, thin (e.g. a Poisson or voxel filter), reproject and keep `Classification`, `Intensity` and RGB.
2. **Blender:** import with Point Cloud IO (centre on origin, with the offset recorded); set the point radius.
3. Material: an Attribute node on classification → ColorRamp with constant interpolation, matching ASPRS classes.
4. Build a ground mesh from class 2 in PDAL or QGIS (DTM) and animate a reveal across the tile.

## Key techniques

- PointCloud object
- Attribute-based shading
- PDAL pipelines

## Pitfalls

- Tens of millions of points overwhelm a laptop, so thin first
- Large coordinates: always use the importer's centring

## Outputs

Stills and a reveal animation

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
