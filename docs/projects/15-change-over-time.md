# 15 Change over time

| | |
|---|---|
| **Group** | Analysis you can see |
| **Showcases** | Time-aware layers as keyframed visibility and material blends |
| **Level** | Intermediate |
| **Status** | Planned |
| **Data** | Dated layers: fire progression polygons, urban footprints by year, shoreline or glacier extents |
| **Tools** | QGIS, Blender |
| **Suggested code location** | `projects/15-change-over-time/` |

## Goal

Animate a sequence of dated extents over terrain (for example, daily fire-perimeter growth) with a date label and an optional accumulating colour scale.

## Why Blender

It demonstrates temporal storytelling with real data, and complements the QGIS temporal controller with 3D context.

## Workflow

1. **GIS:** split the layer by date and export one file per step (or one file with an integer day field).
2. **Blender:** either import one object per step and keyframe visibility, or import once and use a Geometry Nodes *Compare* against a frame-driven value to show features up to the current date.
3. Colour by date with a sequential ramp; add a frame-driven date label.

## Key techniques

- Frame-driven Geometry Nodes filters
- Viewport/render visibility keyframes

## Pitfalls

- Sensitive subjects (e.g. bushfire) call for restrained styling and dated sources

## Outputs

MP4, small-multiple stills

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
