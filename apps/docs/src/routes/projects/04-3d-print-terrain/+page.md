---
title: 04 3D-printable terrain or catchment tile
---

| | |
|---|---|
| **Group** | Terrain & cartography |
| **Showcases** | Mesh preparation for fabrication; scale and exaggeration on a physical object |
| **Level** | Intermediate |
| **Status** | Planned |
| **Data** | DEM; catchment or island boundary; optional route or stream lines to emboss |
| **Tools** | QGIS, Blender, 3D Print Toolbox extension, slicer software |
| **Suggested code location** | `projects/04-3d-print-terrain/` |

## Goal

Produce a watertight, printable terrain tile (or a jigsaw of tiles) at a stated horizontal scale and vertical exaggeration, with an embossed route or stream network.

## Why Blender

Physical models are popular for teaching and engagement, and Blender has the mesh tooling to make them manifold and printable.

## Workflow

1. **GIS:** clip the DEM to the boundary; buffer streams or route lines to a printable width at the target scale.
2. **Blender:** build the terrain mesh, decimate it to a printer-sensible face count, and solidify or extrude it to a base.
3. Boolean-subtract or emboss the route; optionally split into interlocking tiles.
4. Run 3D Print Toolbox checks (manifold, intersections, thin walls); scale to the printer bed.
5. Export STL or 3MF; record the scale and exaggeration on the base as embossed text.

## Key techniques

- Decimate + Remesh
- Solidify / Geometry Nodes base
- Boolean embossing
- Print checks

## Pitfalls

- Horizontal scale makes thin ridges unprintable, so exaggerate deliberately
- Non-manifold edges from boolean operations on noisy DEMs

## Outputs

STL/3MF, photo of the print

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
