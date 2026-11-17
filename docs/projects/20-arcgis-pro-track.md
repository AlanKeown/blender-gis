# 20 ArcGIS Pro preparation track

| | |
|---|---|
| **Group** | Pipelines & publishing |
| **Showcases** | Interchangeability of GIS preparation; ArcPy ↔ open-source parity |
| **Level** | Intermediate |
| **Status** | Planned |
| **Data** | Inputs of projects 01, 05 and 10 |
| **Tools** | ArcGIS Pro 3.6/3.7 + ArcPy (Windows); optionally arcgis-mcp-bridge |
| **Suggested code location** | `projects/20-arcgis-pro-track/` |

## Goal

Produce the same hand-off files as the QGIS path with ArcPy, feed them to the same Blender scripts, and diff the outputs.

## Why Blender

It shows Blender is GIS-agnostic, and gives Esri-centric teams a direct path.

## Workflow

1. An ArcPy preparation script: ProjectRaster/Clip/ExportFeatures to GeoPackage + GeoTIFF in the project CRS.
2. Run the Blender build unchanged against `derived/arcpy/`.
3. Raster-diff the DEM inputs (GDAL) and image-diff the renders; explain any differences (resampling, nodata handling).

## Key techniques

- Clone of arcgispro-py3
- Format parity between toolchains

## Pitfalls

- Default resampling differs between ArcGIS and GDAL
- Geodatabase-only outputs don't reach Blender: always export

## Outputs

Side-by-side renders + a diff report

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
