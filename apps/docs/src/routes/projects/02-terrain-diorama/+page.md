# 02 Terrain diorama with cut-away

| | |
|---|---|
| **Group** | Terrain & cartography |
| **Showcases** | Draped orthophoto; solid diorama base; geological or hydrological cut-away |
| **Level** | Intermediate |
| **Status** | Planned |
| **Data** | DEM + orthophoto at matching extent; optional geology polygons or borehole-derived strata depths |
| **Tools** | QGIS, Blender (Geometry Nodes, Cycles), BlenderGIS |
| **Suggested code location** | `projects/02-terrain-diorama/` |

## Goal

Build a tabletop-style model of a familiar place (a valley, an island or a headland) with the orthophoto draped, solid sides and a cut face revealing strata or a water table.

## Why Blender

This kind of museum-display output is hard to get from a GIS, and it explains terrain to non-specialists immediately.

## Workflow

1. **GIS:** clip DEM and orthophoto to an identical rectangular (or circular) AOI and export them.
2. **Blender:** import the DEM with BlenderGIS (*Import georaster → DEM as displacement*) or a displaced grid; UV-map the orthophoto by extent.
3. **Base:** in Geometry Nodes, extrude the terrain's boundary edges down to a flat base and fill it, then assign a side material.
4. **Cut-away:** boolean a slab out of one side; on the cut face, drive a banded material from Z (strata) or from depths imported as attributes.
5. **Presentation:** studio lighting (area lights), shallow depth of field, and a turntable animation.

## Key techniques

- Geometry Nodes boundary extrusion
- Boolean cut faces with procedural strata
- Depth of field for miniature look
- Turntable camera rig

## Pitfalls

- Orthophoto/DEM extents that differ by even a pixel misalign the drape
- Strata from a few boreholes are illustrative, not a geological model, so label them as such

## Outputs

Hero still, turntable MP4, optional GLB for the web (project 17)

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
