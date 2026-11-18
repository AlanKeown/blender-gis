---
title: 08 Photomontage from geotagged photos
---

|                             |                                                                                                                       |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Group**                   | Urban & site                                                                                                          |
| **Showcases**               | Camera matching from EXIF/survey; visual impact assessment                                                            |
| **Level**                   | Advanced                                                                                                              |
| **Status**                  | Planned                                                                                                               |
| **Data**                    | Geotagged photographs (EXIF GPS + heading, focal length); DEM; proposal model; surveyed camera positions if available |
| **Tools**                   | BlenderGIS (cameras from geotagged photos), ImageGIS2Camera (optional), ExifTool, fSpy (optional)                     |
| **Suggested code location** | `projects/08-photomontage/`                                                                                           |

## Goal

Produce verified-view-style photomontages: place Blender cameras where the photos were taken, match lens and orientation, and render a proposal composited over each photo.

## Why Blender

It demonstrates camera realism, and matching to real photographs is something GIS packages don't attempt.

## Workflow

1. Extract EXIF (position, altitude, heading, focal length, sensor) with ExifTool; convert positions to the project CRS.
2. Create cameras with BlenderGIS's geotagged-photo tool (or ImageGIS2Camera for batches); set the sensor width and focal length to match.
3. Refine the orientation against known features (ridgelines, poles) using the photo as camera background.
4. Render the proposal with a shadow catcher and composite it over the photo.

## Key techniques

- Camera sensor/focal matching
- Background images
- Shadow catcher compositing

## Pitfalls

- Phone GPS altitude and heading are rough, so refine against control features
- Lens distortion must be corrected before matching

## Outputs

Existing / proposed image pairs with a camera metadata table

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
