---
title: 09 Flood inundation animation
---

| | |
|---|---|
| **Group** | Analysis you can see |
| **Showcases** | Communicating modelled water levels; time animation |
| **Level** | Intermediate |
| **Status** | Planned |
| **Data** | DEM; modelled flood depth or level rasters per time step or AEP (or simple bathtub levels for a demo) |
| **Tools** | QGIS / GDAL, Blender (displacement, volumetric water material) |
| **Suggested code location** | `projects/09-flood-inundation/` |

## Goal

Animate inundation across a floodplain, preferably from modelled depth grids rather than a flat water plane, with a time or AEP label.

## Why Blender

Flood depth grids are hard for the public to read. Rendered water over terrain with buildings is not.

## Workflow

1. **GIS:** convert depth grids to water-surface elevation (DEM + depth) at matching extent; set no-data to below terrain.
2. **Blender:** one plane per time step displaced by water-surface elevation (or one plane with an image sequence); a semi-transparent water shader with depth-based absorption.
3. Animate through the steps; add a label driven by the frame number.
4. For a quick demo only: a flat plane animated in Z (a 'bathtub' fill), clearly captioned as illustrative.

## Key techniques

- Image sequences as displacement
- Volume absorption for depth cues
- Frame-driven text

## Pitfalls

- A bathtub plane ignores hydraulics and connectivity, so never present it as a flood model
- Water-surface z-fighting with terrain at shallow depths

## Outputs

MP4 animation, key-frame stills

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
