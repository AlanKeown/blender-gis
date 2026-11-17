# 10 Viewshed: analysis vs experience

| | |
|---|---|
| **Group** | Analysis you can see |
| **Showcases** | Validating a GIS viewshed with an eye-level render |
| **Level** | Intermediate |
| **Status** | Planned |
| **Data** | DEM (+ surface model if available); observer points |
| **Tools** | QGIS Visibility / gdal_viewshed, Blender |
| **Suggested code location** | `projects/10-viewshed/` |

## Goal

For a lookout or proposed structure, compare the computed viewshed (draped on the terrain) with what a camera at eye height actually sees.

## Why Blender

It joins the analytical and the perceptual views of one question, and is a good test of whether the DEM resolution suits the purpose.

## Workflow

1. **GIS:** compute viewsheds from the observer points at 1.6 m; export as rasters.
2. **Blender:** drape the viewshed as an emissive overlay; place a camera at the same point and height.
3. Render a 360° equirectangular panorama (Cycles panoramic camera) from the observer, plus an aerial view of the draped viewshed.
4. Discuss the differences: vegetation, DEM resolution and Earth-curvature settings.

## Key techniques

- Panoramic (equirectangular) cameras
- Raster overlay masks

## Pitfalls

- Bare-earth DEMs overstate visibility where there is vegetation
- Curvature and refraction settings must match between tools

## Outputs

Paired aerial and panorama renders

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
