# ArcGIS Pro track (optional)

The core pipeline is QGIS-first. ArcGIS Pro is an optional, parallel preparation path, so
that each relevant project can show the same inputs prepared with ArcPy. That is useful for
Esri-centric organisations and as a cross-check.

## Constraints

- ArcGIS Pro 3.6/3.7 runs on **Windows only** (Windows 11 64-bit, or Windows Server). 3.7 requires .NET Desktop
  Runtime 10.
- ArcPy is installed with Pro, not from PyPI, and **cannot run in WSL**. ArcPy scripts run
  in the Windows VS Code window.
- The Pro SDK (.NET add-ins) is also Windows-only and needs a licensed Pro installation.

## Python environment

Never develop against the default `arcgispro-py3` environment. Clone it:

```powershell
& "C:\Program Files\ArcGIS\Pro\bin\Python\Scripts\conda.exe" create --name bgis-pro --clone arcgispro-py3
& "C:\Program Files\ArcGIS\Pro\bin\Python\Scripts\proswap.bat" bgis-pro
```

The clone usually lands under `%LOCALAPPDATA%\ESRI\conda\envs\bgis-pro`. Select its
`python.exe` in the Windows workspace if you're working on ArcPy scripts (or add a second
Windows workspace file for Pro work).

## What the Pro track produces

ArcPy scripts write the **same hand-off files** as the QGIS path, in the same CRS and to
the same extent, into `derived/arcpy/`. Blender doesn't care which GIS produced them.

| Step | QGIS / open source | ArcPy |
|---|---|---|
| Reproject + clip DEM | `gdalwarp` / `qgis_process run gdal:warpreproject` | `arcpy.management.ProjectRaster`, `arcpy.management.Clip` |
| Hillshade / slope | `gdaldem` | `arcpy.ddd.HillShade`, `arcpy.ddd.Slope` |
| Vector clip + export | `ogr2ogr -clipsrc` | `arcpy.analysis.Clip` → `arcpy.conversion.ExportFeatures` to GeoPackage |
| Viewshed | `gdal_viewshed` / QGIS Visibility | `arcpy.ddd.Viewshed2` |

## Agent access (optional)

| Project | Approach | Notes |
|---|---|---|
| arcgis-mcp-bridge (`muend`) | MCP server + separate ArcPy worker process; path guards; destructive tools require confirmation | Apache-2.0; Windows, licensed Pro, Python 3.11+ for the bridge |
| CLI-Anything-ArcGIS-Pro (`Jasper0122`) | Headless JSON CLI over ArcPy plus a live in-Pro bridge exposed as MCP tools | Check its licence terms for your use |
| MCP for ArcGIS Location Services (Esri, beta) | Hosted services, not Pro | Geocoding, routing, elevation, static maps |

All except Esri's hosted service are independent community projects, not Esri products.
