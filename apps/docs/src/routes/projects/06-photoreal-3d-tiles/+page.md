---
title: 06 Photoreal context from 3D Tiles
---

|                             |                                                                                       |
| --------------------------- | ------------------------------------------------------------------------------------- |
| **Group**                   | Urban & site                                                                          |
| **Showcases**               | Streaming 3D Tiles into Blender; combining with proposed geometry                     |
| **Level**                   | Intermediate                                                                          |
| **Status**                  | Planned                                                                               |
| **Data**                    | Google Photorealistic 3D Tiles (API key + billing account) or another 3D Tiles source |
| **Tools**                   | Blosm (3D Tiles import)                                                               |
| **Suggested code location** | `projects/06-photoreal-3d-tiles/`                                                     |

## Goal

Import a photoreal mesh of a precinct and place a proposed design into it for a before/after visualisation.

## Why Blender

It is the fastest route to photoreal context, but the licensing makes a good teaching point about what you may publish.

## Workflow

1. Obtain a Map Tiles API key and read Google's Map Tiles terms (attribution, caching, permitted use).
2. In Blosm, choose 3D Tiles, set the extent (keep it small: around 1 km² is practical) and level of detail, then import.
3. Align a georeferenced proposal model using the same origin; render a before/after pair.

## Key techniques

- 3D Tiles level-of-detail selection
- Origin alignment between sources

## Pitfalls

- Large extents mean thousands of tiles and slow imports
- Tiles are not editable topology
- Publishing restrictions apply, so check the terms before posting renders

## Outputs

Before/after stills (with the attribution the terms require)

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
