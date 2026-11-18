---
title: Toolchain
---

Status as checked in **November 2026**. "Verified" means confirmed against the project's own
page or a reliable listing. "Check" means it exists but compatibility with the versions
below should be tested before you depend on it. See
[Research validation](/reference/research-validation/) for the evidence.

## Core applications

| Application | Version to target | Runs on | Notes |
|---|---|---|---|
| Blender | **5.2 LTS** (released 14 July 2026, supported to July 2028) | Windows (GUI + GPU); Linux/WSL for headless renders | LTS means a stable Python API for the life of the repo. 5.x files may not open cleanly in 4.x. |
| QGIS | **3.44 LTR**, or a 4.x release for new work | Windows (OSGeo4W) for the GUI and MCP; conda-forge in WSL for `qgis_process` | QGIS 4.0 (Qt6) shipped 6 March 2026. The first 4.x LTR has been subject to schedule changes, so check qgis.org before choosing. QGIS 4 uses a separate profile directory from QGIS 3. |
| ArcGIS Pro (optional) | **3.6 or 3.7** | Windows 11 only | 3.7 needs .NET Desktop Runtime 10. ArcPy is not pip-installable and does not run in WSL. |
| Python (geo stack) | 3.12 via micromamba/conda-forge | WSL | GDAL, PDAL, Rasterio, GeoPandas, PyProj, laspy |
| `bpy` (Blender as a module) | Matching your Blender release | WSL or Windows | Each `bpy` release supports exactly one Python version: match it, or use the Blender binary in `-b` mode instead |
| SveltePress | Your choice | WSL or Windows (Node.js) | Documentation site |
| Svelte + SvelteKit | Your choice | WSL or Windows (Node.js) | Demo site for project results |

## Blender add-ons and extensions

| Tool | Cost | Purpose | Status |
|---|---|---|---|
| **BlenderGIS** (domlysz) | Free, GPL | Georeferencing, SHP/raster/DEM/OSM import, web basemaps, Get SRTM, Delaunay terrain, terrain-analysis nodes, cameras from geotagged photos, georeferenced render output | Verified; **check on 5.2**. Users reported a Blender 5.0 cache-folder bug with a community fix. Installed as a legacy add-on from the GitHub zip. |
| **Blosm** (formerly blender-osm) | Base free; premium paid | OSM import, terrain, GPX, Google Photorealistic 3D Tiles and other 3D Tiles sources | Verified |
| **Sun Position** | Free | Sun from location, date and time | Verified. An extension (Blender Extensions) since 4.2, no longer bundled. |
| **A.N.T. Landscape** | Free | Noise terrain and the Landscape Eroder | Verified. An extension since 4.2, community-maintained with limited support. |
| **Point Cloud IO** (StudioMedio) | Free, GPL | E57/PLY/LAS/LAZ/PCD/XYZ/PTS into the native PointCloud object; centre-on-origin for georeferenced LiDAR | Verified; requires **Blender 5.1+** |
| **3D Print Toolbox** | Free | Manifold checks, thickness, scale-to-bounds | Verified (extension) |
| Point Cloud Visualizer | Paid | Large coloured point clouds, filtering | Verified |
| Photogrammetry Importer | Free | SfM/MVS results and common point formats | Verified |
| GIS2BLEND | Paid (~US$47) | CRS-aware SHP/GPKG import, OSM, procedural buildings and roads, Blender 5.x | Verified |
| ImageGIS2Camera | Paid (~US$32) | Cameras from geotagged photos or GIS points; batch photomontage | Verified |
| Geo-Scatter | Paid | Large-scale scattering | Well known; not re-checked |
| Gorani, Earth2MSFS, Concept Studio OSM, DL GIS Exchange | — | Mentioned in the research notes | **Not verified**. Do not plan around these without finding them first. |

## GIS-side helpers

| Tool | Purpose | Status |
|---|---|---|
| QuickOSM, QuickMapServices, OpenTopography DEM Downloader (QGIS plugins) | Data acquisition | Long-standing plugins; check QGIS 4 readiness |
| **Qgis2threejs** | DEM + vectors to a three.js web scene or glTF, straight from QGIS | Verified; 3.x releases support QGIS 4 |
| PDAL / `pdal` CLI | Point-cloud filtering, classification, thinning | Verified (conda-forge) |
| OpenTopography API | SRTM, NASADEM, Copernicus DEM | Free API key required (also by BlenderGIS Get SRTM) |

## AI / MCP servers

| Server | What it drives | Status |
|---|---|---|
| **Blender Lab MCP Server** (official, Blender Foundation) | Running Blender: Python API, bundled docs, scene summaries, screenshots, code execution | Verified; requires **Blender 5.1+** plus its add-on |
| **MCP for Blender** (`ahujasid/mcp-for-blender`, formerly `blender-mcp`) | Running Blender: code execution, scene info, asset libraries (Poly Haven, Sketchfab and others), generative 3D | Verified; renamed September 2026, old package still works |
| **QGIS MCP** (`nkarasiak/qgis-mcp` + plugin in the QGIS repository) | Running QGIS: layers, features, processing, rendering, layouts | Verified; QGIS 3.28–4.x |
| **gis-mcp** (`mahdin75`) | Headless Shapely/GeoPandas/Rasterio/PyProj/PySAL operations | Verified; complementary, does not drive Blender or QGIS |
| **MCP for ArcGIS Location Services** (Esri, beta) | Hosted geocoding, routing, elevation, static maps | Verified; beta since 29 June 2026, Streamable HTTP only |
| arcgis-mcp-bridge, CLI-Anything-ArcGIS-Pro | Local ArcGIS Pro / ArcPy | Verified; independent community projects, Windows + licensed Pro |
| "geoblender" MCP pipeline | — | **Not verified** |

There is still **no BlenderGIS-specific MCP server**. A general Blender MCP server can call
BlenderGIS operators through `bpy.ops` when the add-on is enabled.
