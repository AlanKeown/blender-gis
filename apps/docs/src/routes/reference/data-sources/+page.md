---
title: Data sources
---

Check each dataset's licence and attribution requirements, and record them on the project
page. Australian sources are listed first because demo sites are in NSW.

## Elevation

| Source                                                                            | Coverage           | Notes                                                                               |
| --------------------------------------------------------------------------------- | ------------------ | ----------------------------------------------------------------------------------- |
| ELVIS – Elevation and Depth Foundation Spatial Data (Geoscience Australia / ICSM) | Australia          | LiDAR-derived 1 m / 5 m DEMs and point clouds (LAS/LAZ) by extent; mostly CC BY 4.0 |
| NSW Spatial Services                                                              | NSW                | Elevation, imagery and cadastre services (check terms per product)                  |
| Copernicus DEM GLO-30                                                             | Global             | 30 m DSM; via OpenTopography (API key)                                              |
| SRTM GL1 / NASADEM                                                                | Global (60°N–56°S) | 30 m; via OpenTopography or BlenderGIS _Get SRTM_                                   |

## Imagery and basemaps

| Source                                                           | Notes                                                                                |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| State and territory imagery services (e.g. NSW Spatial Services) | Check whether download or only streaming is permitted                                |
| Sentinel-2 (Copernicus)                                          | 10 m multispectral, free; good for drapes at regional scale                          |
| BlenderGIS basemaps (OSM, Bing, ESRI, etc.)                      | Convenient for prototypes; **check each provider's terms** before publishing renders |

## Vectors

| Source                                                  | Notes                                                 |
| ------------------------------------------------------- | ----------------------------------------------------- |
| OpenStreetMap (QuickOSM / Overpass, Geofabrik extracts) | ODbL, attribution “© OpenStreetMap contributors”      |
| ABS ASGS boundaries + census data                       | Prism maps (project 12)                               |
| Geoscape / G-NAF (Australia)                            | Addresses and building footprints (licence-dependent) |
| Local council open data                                 | Planning layers, footprints, flood studies            |

## 3D

| Source                                | Notes                                                                         |
| ------------------------------------- | ----------------------------------------------------------------------------- |
| Google Photorealistic 3D Tiles        | Map Tiles API key; billing account; Google's terms on attribution and caching |
| Cesium ion / other 3D Tiles providers | Imported through Blosm's custom 3D Tiles source                               |

## Routes and points

- Your own GPX tracks (Strava, Garmin and similar exports)
- Geotagged photographs with EXIF (project 08)
