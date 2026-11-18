---
title: 03 Terrain analysis shading
---

| | |
|---|---|
| **Group** | Terrain & cartography |
| **Showcases** | Slope, aspect and height shading in nodes; side-by-side comparison with GIS derivatives |
| **Level** | Introductory |
| **Status** | Planned |
| **Data** | DEM; QGIS slope/aspect rasters for comparison |
| **Tools** | Blender shader nodes, BlenderGIS terrain analysis nodes, QGIS / gdaldem |
| **Suggested code location** | `projects/03-terrain-analysis-shading/` |

## Goal

Recreate classic terrain derivatives (hypsometric tint, slope classes, aspect wheel) as live shader setups on the 3D surface, and check them against gdaldem outputs.

## Why Blender

Analysis colouring stays live: change the class breaks or exaggeration and the render updates. Comparing with gdaldem demonstrates that the geometry is right.

## Workflow

1. **GIS:** produce reference slope (degrees) and aspect rasters with gdaldem at the same resolution.
2. **Blender:** on the terrain material, compute slope = acos(normal·Z) and aspect = atan2 of the normal's XY in nodes; height from object-space Z.
3. Map each to a ColorRamp with the same breaks as the QGIS style.
4. Use BlenderGIS's built-in terrain analysis nodes as a baseline.
5. Render the three variants and the QGIS equivalents into a comparison figure.

## Key techniques

- Geometry and Texture Coordinate nodes
- Vector maths for slope and aspect
- Constant-interpolation ColorRamps as class breaks

## Pitfalls

- Normals change with displacement method; use true displacement for accurate slope
- Aspect convention (0° = north, clockwise) must match the GIS

## Outputs

Comparison figure: Blender vs QGIS

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
