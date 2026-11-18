---
title: Research validation
---

`research.txt` collects several AI-chat answers given in late 2026. They overlap and
sometimes contradict each other. This page checks each substantive claim against primary
or reliable sources as at **17 November 2026**.

**Verdicts:** ✅ Confirmed · ✏️ Corrected (substantially right, detail wrong or incomplete)
· ⏳ Outdated · ❓ Not verified (couldn't find a reliable source; don't plan around it)
· ⚖️ Conflict (the notes disagree with themselves; resolution given)

## Blender and add-ons

| Claim in research.txt | Verdict | Finding |
|---|---|---|
| BlenderGIS imports SHP, rasters/GeoTIFF, DEMs, OSM XML; streams basemaps; Get SRTM; Delaunay terrain; drop-to-ground; terrain-analysis nodes; cameras from geotagged photos; georeferenced render output | ✅ | Matches the project README feature list. |
| BlenderGIS imports GeoJSON, GeoPackage, KML | ✏️ | The README lists Shapefile, raster/GeoTIFF DEM and OSM XML. Convert other formats to Shapefile in QGIS, or use GIS2BLEND (SHP/GPKG). |
| BlenderGIS "works with Blender 5.x" / "supports 5.0, 4.3, 4.2 LTS" | ✏️ | It is used on 5.0, but users reported a 5.0 cache-folder bug with a community fix. It is a legacy add-on, not on Blender Extensions. **Test on 5.2 LTS.** |
| Get SRTM needs a free OpenTopography API key | ✅ | Required since 2022. The BlenderGIS wiki's note that SRTM is "~90 m except the USA" is out of date: SRTM GL1 30 m is available globally via OpenTopography. |
| BlenderGIS imports LAS/LAZ | ✏️ | Not a BlenderGIS feature. Use the **Point Cloud IO** extension (Blender 5.1+, native PointCloud object), Photogrammetry Importer, or Point Cloud Visualizer (paid). |
| Shapefile export is limited (attributes) | ✅ | DBF attributes aren't carried through Blender, so re-exported shapefiles lose them. |
| Georeferencing doesn't survive OBJ/FBX export | ✅ | Mesh formats carry no CRS. Use a sidecar (this repo uses `*.georef.json`). |
| Blosm (formerly Blender-OSM): OSM, terrain, Google 3D cities / 3D Tiles | ✅ | Free base version; Google 3D Tiles need an API key and a billing account; practical extents are small (≈1 km²). |
| Gorani "on Blender Extensions" with `CTX::Buildings` collections | ❓ | Could not be found. |
| GIS2BLEND (paid) | ✅ | ~US$47, Blender 5.x, CRS-aware SHP/GPKG, OSM, procedural buildings/roads. |
| ImageGIS2Camera | ✅ | Paid (~US$32) camera-from-photo / GIS-points add-on. |
| DL GIS Exchange (cut/fill), Earth2MSFS, Concept Studio OSM | ❓ | Not verified. |
| Geo-Scatter for slope-based scattering | ✅ | Well-known paid scatter add-on. The rule-based approach in project 11 uses free Geometry Nodes. |
| "Blender has a Sun Position add-on" | ✏️ | Since 4.2 it's an **extension** you install from Blender Extensions; it is no longer bundled. |
| "ANTS Terrain Eroder" | ✏️ | The tool is the **A.N.T. Landscape** extension's *Landscape Eroder*: community-maintained, limited support. |
| Displacement tips: 16-bit or higher, Non-Color | ✅ | Standard practice. 8-bit terraces. |
| Centre at origin to avoid jitter | ✅ | Blender uses float32 vertex coordinates; at a 6.2 M m northing the spacing is ~0.5 m. |
| Import CSV / point data via Geometry Nodes | ✅ (added) | Blender 4.5+ has an *Import CSV* Geometry Node producing a point cloud with numeric attributes (strings ignored). |
| 3D printing terrain | ✅ | The **3D Print Toolbox** extension provides manifold/thickness checks. |
| Blender "5.x" is current | ✏️ | **Blender 5.2 LTS** was released 14 July 2026 and is supported to July 2028, making it the target for this repo. 5.x files may not open cleanly in 4.x. |

## MCP servers

| Claim | Verdict | Finding |
|---|---|---|
| No dedicated BlenderGIS MCP server; drive it through a Blender MCP via `bpy.ops` | ✅ | Still true. |
| "mcp-for-blender (formerly blender-mcp by ahujasid)" | ✅ | Renamed in September 2026 (`ahujasid/mcp-for-blender`). The `blender-mcp` package now installs the new one; existing configs keep working. |
| Official Blender Lab MCP Server, "mainly for Blender 5.1+" | ✅ | Blender Lab (Blender Foundation) server + add-on; requires 5.1+. One secondary source states 4.2+, but several (including setup guides) say 5.1+. |
| gis-mcp (`mahdin75`) exposes Shapely/GeoPandas/Rasterio/PyProj; not connected to Blender | ✅ | Also PySAL and optional data helpers. |
| "geoblender" builds Blender scenes from place names over MCP | ❓ | Not found. |
| QGIS MCP: `nkarasiak/qgis-mcp` + plugin in the official repository, "100+ tools" | ✏️ | Plugin is in the QGIS repository (supports QGIS 3.28–4.x). Tool counts differ by version and listing (≈50 to 100+). |
| gis-mcp is "not a better option" than QGIS + QGIS MCP when Blender is the goal | ✅ | Sound reasoning: QGIS gives a visual check and the full Processing toolbox before export. |

## Esri / ArcGIS

| Claim | Verdict | Finding |
|---|---|---|
| MCP for ArcGIS Location Services (beta) launched 29 June 2026; endpoint `location-services-mcp.arcgis.com/beta/mcp`; geocoding, routing, elevation, static maps; no extra charge for MCP itself | ✅ | Confirmed by Esri's blog and developer docs. Streamable HTTP only, so there is no local stdio version. |
| "Nine tools in version 1.0.0-beta.1.9 (27 October 2026)" | ❓ | Not verified. Check the tools page. |
| arcgis-mcp-bridge: two-process design, 100 tools / 10 verticals, PathGuard, confirm gates, Windows + licensed Pro, Python 3.11+, Apache-2.0 | ✅ | Matches PyPI and the repo. The version number quoted was not checked. |
| CLI-Anything-ArcGIS-Pro: headless CLI + live bridge, verified on Pro 3.4 | ✅ | Confirmed. The licence (stated as PolyForm Noncommercial) was not re-checked, so read it before commercial use. |
| nicogis Pro Add-In sample: 4 tools, .NET 8, Named Pipes | ❓ | Plausible but not re-checked. It is a sample, not a product. |
| ArcGIS Pro is Windows-only; ArcPy isn't pip-installable and won't run in WSL | ✅ | Pro 3.6/3.7 run on Windows only (Windows 11 64-bit or Windows Server). **Pro 3.7** is current and needs .NET Desktop Runtime 10. |
| "Pro 3.5" as the target | ⏳ | Use 3.6 or 3.7. |

## Environment and repository

| Claim | Verdict | Finding |
|---|---|---|
| Windows for Pro, WSL2 for the Linux tooling | ✅ | Adopted, with Blender's GUI and QGIS's GUI also on Windows (see [Setup](/setup/)). |
| One VS Code install with the WSL extension; a window is either local or remote | ✅ | Two windows, two workspace files. |
| "VS Code ignores `.vscode/settings.json` in the WSL window… actually it doesn't" | ✏️ | The settings file is shared by whoever opens the folder. Keep interpreter paths in per-OS workspace files instead. |
| Keep the repo in WSL ext4 / keep it on Windows / use two clones | ⚖️ | The notes recommend all three. **Resolution:** two clones synced through a remote, data outside Git in a shared Windows folder. See [Repository](/setup/repository/). |
| Windows apps can open `\\wsl.localhost\Ubuntu-26.04\…` "seamlessly" | ✏️ | It works, but many GIS desktop apps behave poorly with UNC paths and file locking. Avoid it for working data. |
| QGIS works in WSLg; prefer `qgis_process` for scripting | ✅ | Workable but sluggish. OpenGL under WSLg often falls back to llvmpipe. |
| Ubuntu 26.04 QGIS packages need checking | ✅ | The Ubuntu archive carries QGIS 3.40.x; OSGeo UbuntuGIS began 26.04 support in June 2026. conda-forge sidesteps this. |
| QGIS "3.x / 4.x" | ✏️ | QGIS 4.0 (Qt6) shipped 6 March 2026; 4.2 followed in July 2026. **3.44 is the long-term release** while the first 4.x LTR's schedule has been revised, so check qgis.org. |
| Clone `arcgispro-py3`, `proswap` | ✅ | Standard Esri practice. |
| `.gitattributes` with `eol=lf` | ✅ | Plus explicit `binary` for `.blend`, `.tif`, `.laz`. |
| `bpy` as a pip module | ✅ (added) | Official; each release supports exactly one Python version. |

## Technique claims

| Claim | Verdict | Finding |
|---|---|---|
| Flood: animated water plane | ✏️ | Fine as an illustration only. Use modelled depth grids for anything presented as a flood result (project 09). |
| Viewshed: render from the observer and compare with QGIS | ✅ | Kept as project 10. Note vegetation and DEM-resolution effects. |
| Tens of millions of points punish a laptop | ✅ | Thin with PDAL first. |
| "Blender as the visualisation end of the pipeline, not the other way" | ✏️ | Mostly right, but BlenderGIS can render **georeferenced rasters** back to GIS (project 18). |
| Physically accurate solar analysis | ✏️ | Sun *position* is computed from location and time. Renders are a visual aid, not certified solar or overshadowing analysis. |

## Additions not in the research notes

- **Point Cloud IO** extension (5.1+) for native LAS/LAZ/E57 import.
- **Import CSV** Geometry Node for tabular point data.
- **Qgis2threejs** as a GIS-native web/glTF export to compare against Blender (project 17).
- **Headless Cycles in WSL** via CUDA, with EEVEE kept on Windows.
- **Sites:** documentation in **SveltePress**, demo site in **Svelte + SvelteKit**.
