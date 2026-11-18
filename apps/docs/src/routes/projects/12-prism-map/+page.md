---
title: 12 3D thematic (prism) maps
---

|                             |                                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------------- |
| **Group**                   | Analysis you can see                                                                               |
| **Showcases**               | Attribute-driven extrusion and colour of polygons, points and hexbins                              |
| **Level**                   | Introductory                                                                                       |
| **Status**                  | Planned                                                                                            |
| **Data**                    | Polygons with a numeric attribute (e.g. ABS census statistics by SA2); optional hexbin aggregation |
| **Tools**                   | QGIS, BlenderGIS import, Geometry Nodes                                                            |
| **Suggested code location** | `projects/12-prism-map/`                                                                           |

## Goal

Turn a choropleth into a prism map (height = value, colour = value or a second variable), plus a hexbin spike-map variant, with a legend.

## Why Blender

It is the classic 'data viz QGIS can't quite do', and gets attention quickly when explained well.

## Workflow

1. **GIS:** join the statistic to the polygons, compute a normalised value, and export the numeric fields only.
2. **Blender:** import the polygons; in Geometry Nodes, _Extrude Mesh_ with offset = value × scale; colour via a ColorRamp on the same attribute.
3. Hexbin variant: aggregate points to hexes in QGIS, import the centroids as points (CSV import node), and instance cylinders.
4. Build the legend in Blender as geometry, or composite it from QGIS.

## Key techniques

- Extrude Mesh by attribute
- CSV Import node
- Legend construction

## Pitfalls

- Height encodes value: normalise per area or population to avoid misleading volumes
- Occlusion hides small prisms, so choose camera angles deliberately

## Outputs

Oblique stills, orbit, legend

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
