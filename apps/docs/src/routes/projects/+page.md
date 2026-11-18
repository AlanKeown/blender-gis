---
title: Project catalogue
---

Twenty demonstrations, each chosen to show something Blender adds to a GIS workflow. Levels are relative: *Introductory* projects need only the core toolchain, while *Advanced* ones combine several techniques or tools.

Suggested build order: **01 → 05 → 13 → 02 → 09 → 14 → 16**. That sequence establishes the terrain, vector and animation foundations, then automates them.

## Terrain & cartography

| # | Project | Showcases | Level | Status |
|---|---|---|---|---|
| 01 | [Shaded-relief map](/projects/01-shaded-relief/) | Cartographic relief rendering; DEM → displacement; orthographic map camera | Introductory | Planned |
| 02 | [Terrain diorama with cut-away](/projects/02-terrain-diorama/) | Draped orthophoto; solid diorama base; geological or hydrological cut-away | Intermediate | Planned |
| 03 | [Terrain analysis shading](/projects/03-terrain-analysis-shading/) | Slope, aspect and height shading in nodes; side-by-side comparison with GIS derivatives | Introductory | Planned |
| 04 | [3D-printable terrain or catchment tile](/projects/04-3d-print-terrain/) | Mesh preparation for fabrication; scale and exaggeration on a physical object | Intermediate | Planned |

## Urban & site

| # | Project | Showcases | Level | Status |
|---|---|---|---|---|
| 05 | [Extruded city from OSM and local footprints](/projects/05-osm-city/) | Vector import; attribute-driven extrusion; context modelling | Introductory | Planned |
| 06 | [Photoreal context from 3D Tiles](/projects/06-photoreal-3d-tiles/) | Streaming 3D Tiles into Blender; combining with proposed geometry | Intermediate | Planned |
| 07 | [Sun and shadow study](/projects/07-sun-shadow-study/) | Physically placed sun; time-lapse shadows across a day or the solstices | Introductory | Planned |
| 08 | [Photomontage from geotagged photos](/projects/08-photomontage/) | Camera matching from EXIF/survey; visual impact assessment | Advanced | Planned |

## Analysis you can see

| # | Project | Showcases | Level | Status |
|---|---|---|---|---|
| 09 | [Flood inundation animation](/projects/09-flood-inundation/) | Communicating modelled water levels; time animation | Intermediate | Planned |
| 10 | [Viewshed: analysis vs experience](/projects/10-viewshed/) | Validating a GIS viewshed with an eye-level render | Intermediate | Planned |
| 11 | [Rule-based vegetation and rocks](/projects/11-procedural-vegetation/) | Geometry Nodes scattering from slope, elevation and raster attributes | Advanced | Planned |
| 12 | [3D thematic (prism) maps](/projects/12-prism-map/) | Attribute-driven extrusion and colour of polygons, points and hexbins | Introductory | Planned |
| 13 | [Route fly-through](/projects/13-route-flythrough/) | GPX/vector routes on terrain; animated line reveal; follow-path camera | Intermediate | Planned |
| 14 | [LiDAR point-cloud visualisation](/projects/14-lidar-point-cloud/) | LAS/LAZ into native point clouds; colour by classification or intensity | Intermediate | Planned |
| 15 | [Change over time](/projects/15-change-over-time/) | Time-aware layers as keyframed visibility and material blends | Intermediate | Planned |

## Pipelines & publishing

| # | Project | Showcases | Level | Status |
|---|---|---|---|---|
| 16 | [Headless, config-driven batch rendering](/projects/16-headless-batch/) | Reproducibility: the same script renders any AOI from a TOML config | Advanced | Planned |
| 17 | [Publishing 3D to the web](/projects/17-web-publishing/) | glTF/GLB export for browser viewers; comparison with Qgis2threejs | Intermediate | Planned |
| 18 | [Round-trip: Blender render back into GIS](/projects/18-round-trip-raster/) | Georeferenced render output; Blender as a raster-production step | Intermediate | Planned |
| 19 | [AI-assisted pipeline via MCP](/projects/19-agentic-pipeline/) | An agent driving QGIS (prep) and Blender (build) through MCP; documenting AI-assisted steps | Advanced | Planned |
| 20 | [ArcGIS Pro preparation track](/projects/20-arcgis-pro-track/) | Interchangeability of GIS preparation; ArcPy ↔ open-source parity | Intermediate | Planned |

## Adding a project

Start from [the page template](https://github.com/AlanKeown/blender-gis/blob/main/apps/docs/templates/project-page.md): copy it to `apps/docs/src/routes/projects/NN-slug/+page.md`, fill it in, and add the page to your documentation navigation.
