# 13 Route fly-through

| | |
|---|---|
| **Group** | Analysis you can see |
| **Showcases** | GPX/vector routes on terrain; animated line reveal; follow-path camera |
| **Level** | Intermediate |
| **Status** | Planned |
| **Data** | GPX track (walk, ride or drive); DEM; orthophoto |
| **Tools** | QGIS, Blosm (GPX import) or BlenderGIS, Blender curves and constraints |
| **Suggested code location** | `projects/13-route-flythrough/` |

## Goal

A 30–60 second animation following a route over draped terrain with a glowing, progressively revealed track and a distance/elevation readout.

## Why Blender

Movement over real terrain is Blender's strength. QGIS animation can't produce this kind of camera work.

## Workflow

1. **GIS:** clean the track, reproject it, densify it, and sample DEM elevation onto the vertices.
2. **Blender:** import as a curve; set bevel for a tube; animate *End Bevel Factor* (or a Geometry Nodes trim) for the reveal.
3. Camera: *Follow Path* on a smoothed, offset copy of the route, with *Track To* an empty that leads the head of the line.
4. Drive a text overlay from the animated factor × route length.

## Key techniques

- Curve bevel and trim animation
- Follow Path / Track To constraints
- Drivers

## Pitfalls

- Raw GPS jitter makes a nauseating camera, so smooth the camera path separately
- The route must sit slightly above the terrain to avoid clipping

## Outputs

MP4 fly-through

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
