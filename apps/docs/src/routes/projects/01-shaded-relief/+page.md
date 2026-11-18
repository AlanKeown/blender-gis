---
title: 01 Shaded-relief map
---

| | |
|---|---|
| **Group** | Terrain & cartography |
| **Showcases** | Cartographic relief rendering; DEM → displacement; orthographic map camera |
| **Level** | Introductory |
| **Status** | Planned |
| **Data** | DEM (Copernicus GLO-30, SRTM, or 1–5 m LiDAR DEM from ELVIS for Australian sites); AOI boundary |
| **Tools** | QGIS / GDAL, Blender (Cycles), optional BlenderGIS |
| **Suggested code location** | `projects/01-shaded-relief/` |

## Goal

Produce a print-quality, exaggerated shaded-relief map of a mountain range or catchment, in the tradition of hand-drawn relief cartography, and export it at a known scale.

## Why Blender

Cycles computes real cast shadows and soft ambient occlusion. A GIS hillshade only models local illumination per cell, so the Blender version reads as a physical surface.

## Workflow

1. **GIS:** reproject the DEM to the project CRS, clip to the AOI plus a margin, fill voids, and export as Float32 GeoTIFF. Record min/max elevation.
2. **GIS (optional):** export a 16-bit normalised PNG for a pure-displacement build, and a hypsometric tint or land-cover raster at the same extent.
3. **Blender:** add a plane sized to the DEM extent in metres; use *Subdivision* (adaptive at render time in Cycles) or a dense grid; add a *Displace* modifier using the DEM image (Non-Color, Extend), with strength = (max − min) × exaggeration.
4. **Light:** a Sun lamp at 25–35° elevation from the north-west (the cartographic convention), with a small angle for soft shadows; optionally a faint fill.
5. **Camera:** orthographic, top-down, ortho scale equal to the AOI width; render resolution chosen for the print size at 300 dpi.
6. **Composite:** multiply the relief over a tint layer in Blender's compositor or in QGIS.

## Key techniques

- Adaptive subdivision / microdisplacement
- Image texture colour space = Non-Color
- Orthographic camera scale ↔ map scale
- Sun angle conventions for relief

## Pitfalls

- 8-bit heightmaps produce visible terracing
- Edge artefacts if the DEM isn't padded beyond the AOI
- Vertical exaggeration must be recorded, or the map misleads

## Outputs

High-resolution PNG/TIFF; optional georeferenced GeoTIFF via BlenderGIS (see project 18)

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
