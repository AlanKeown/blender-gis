# What can be achieved

This page maps what Blender can usefully do with geospatial data. Each capability links to
the catalogue project(s) that demonstrate it.

## 1. Terrain as cartography

| Capability | How it works in Blender | Projects |
|---|---|---|
| Shaded / exaggerated relief | A subdivided plane plus a Displace modifier driven by a 16-bit (or float) DEM, an orthographic camera, and a low, raking sun. Cycles shadowing gives the tactile "geoblender" look that a 2D hillshade only approximates. | [01](../projects/01-shaded-relief.md) |
| Draped imagery and thematic drapes | Orthophoto, classified raster or rendered QGIS map as an image texture on the terrain, UV-mapped by georeferenced extent | [02](../projects/02-terrain-diorama.md), [03](../projects/03-terrain-analysis-shading.md) |
| Hypsometric tint, slope and aspect shading | Shader nodes read geometry position and normal to colour by height, slope or aspect. BlenderGIS ships ready-made terrain analysis node setups. | [03](../projects/03-terrain-analysis-shading.md) |
| Dioramas and cut-aways | Boolean or Geometry Nodes clipping to an AOI, with solid sides and optional strata bands for a museum-model look | [02](../projects/02-terrain-diorama.md) |
| Physical models | A watertight, scaled, based mesh exported as STL or 3MF; the 3D Print Toolbox extension checks manifoldness and wall thickness | [04](../projects/04-3d-print-terrain.md) |

## 2. Urban and site context

| Capability | How it works | Projects |
|---|---|---|
| Extruded cities from OSM or your own footprints | BlenderGIS or Blosm imports buildings with height or level tags. Your own footprints (e.g. a GeoPackage from QGIS) can be extruded with Geometry Nodes from an attribute. | [05](../projects/05-osm-city.md) |
| Photoreal context | Blosm imports Google Photorealistic 3D Tiles (API key, billing account and Google's terms apply) and other 3D Tiles sources | [06](../projects/06-photoreal-3d-tiles.md) |
| Massing and shadow studies | The Sun Position extension sets the sun from latitude, longitude, date and time. Keyframing time gives day or season sweeps. | [07](../projects/07-sun-shadow-study.md) |
| Photomontage / visual impact | Cameras placed from geotagged photos (BlenderGIS) or survey points; matching focal length and sensor; render the proposal over the photo | [08](../projects/08-photomontage.md) |

## 3. Analysis you can see

| Capability | How it works | Projects |
|---|---|---|
| Inundation | A water plane animated through elevations, or better, a modelled depth raster used as displacement or as a mask | [09](../projects/09-flood-inundation.md) |
| Viewsheds | A camera at the observer height. Compare the render with a QGIS viewshed raster draped on the terrain. | [10](../projects/10-viewshed.md) |
| Rule-based landscapes | Geometry Nodes scatters vegetation and rocks using slope, elevation and raster-derived attributes (moisture, land cover) | [11](../projects/11-procedural-vegetation.md) |
| 3D thematic maps | Polygons extruded and coloured by attribute (prism maps), bars on points, spikes on hexbins | [12](../projects/12-prism-map.md) |
| Movement | GPX tracks or flow lines as curves with an animated dash or glow; a camera that follows the path | [13](../projects/13-route-flythrough.md) |
| Point clouds | LAS/LAZ into Blender's native point-cloud object (Point Cloud IO extension, Blender 5.1+), coloured by classification, intensity or height | [14](../projects/14-lidar-point-cloud.md) |
| Change over time | Keyframed visibility or material blends across dated layers: fire progression, urban growth, coastline change | [15](../projects/15-change-over-time.md) |

## 4. Pipelines, automation and publishing

| Capability | How it works | Projects |
|---|---|---|
| Headless, config-driven batch | `blender -b -P script.py -- --config aoi.toml`, or `bpy` imported as a Python module | [16](../projects/16-headless-batch.md) |
| Web publishing | glTF/GLB export for three.js or `<model-viewer>`. Compare with Qgis2threejs exporting directly from QGIS. | [17](../projects/17-web-publishing.md) |
| Back to GIS | BlenderGIS renders a georeferenced raster from a top-down orthographic camera, so a Blender render can be loaded back into QGIS | [18](../projects/18-round-trip-raster.md) |
| AI-assisted workflows | QGIS MCP prepares data, Blender MCP builds the scene; the agent moves between them | [19](../projects/19-agentic-pipeline.md) |
| Enterprise GIS track | The same inputs prepared with ArcPy in ArcGIS Pro, for comparison and for Esri-centric organisations | [20](../projects/20-arcgis-pro-track.md) |

## What Blender does badly (and how to work around it)

| Limitation | Consequence | Workaround |
|---|---|---|
| Single-precision vertex coordinates | At a northing of ~6,000,000 m, float32 spacing is ~0.5 m: geometry wobbles and cameras jitter | Always subtract a local origin (see [Conventions](conventions.md)) |
| No native CRS | Nothing stops you mixing EPSG:4326 and MGA | Reproject in the GIS first; BlenderGIS stores scene georeferencing; record the CRS in the project config |
| Attributes are second-class | String attributes from shapefiles are not available to Geometry Nodes; BlenderGIS re-export loses DBF attributes | Encode categories as integers before export; keep the GIS as the source of truth |
| Large meshes are heavy | Multi-million-face terrains and tens of millions of points punish viewport performance | Clip to the AOI, decimate, use adaptive subdivision at render time, LOD for web output |
| Exports lose georeferencing | OBJ, FBX and glTF carry no CRS | Ship a sidecar JSON with CRS + origin; use georeferenced raster output for 2D |
| No defensible analysis | A render of rising water is not a flood model | Compute in a GIS or hydraulic model; Blender visualises the result |
