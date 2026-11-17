# Blender for GIS

A showcase of what Blender can usefully do with geospatial data, and of how to build a
reproducible Windows + WSL2 environment to do it.

Blender is not a GIS. It has no attribute table, no topology rules and, out of the box, no
coordinate reference system. What it does have is physically based rendering, real cameras
and lights, displacement, Geometry Nodes, simulation, animation and a complete Python API.
The work here pairs a proper GIS (QGIS first, ArcGIS Pro optionally) for preparing and
checking data with Blender for geometry, light, motion and output.

> **Status**
>
> These pages document the **plan**: what can be achieved, how to set up the
> environment, and a catalogue of 20 demonstration projects. Each project page has a
> **Results** section that will be filled in as the project is built.

## Where to start

- **[Guide](guide/index.md)**: What Blender adds to a GIS workflow, the toolchain, and the coordinate rules that keep everything aligned.

- **[Setup](setup/index.md)**: Windows 11 for Blender, QGIS and ArcGIS Pro; Ubuntu on WSL2 for the open-source pipeline; VS Code and Git across both.

- **[Projects](projects/index.md)**: Twenty demonstrations, from shaded relief and 3D-printed terrain to LiDAR, flood animation, headless batch rendering and AI-driven pipelines.

- **[Research validation](reference/research-validation.md)**: A claim-by-claim check of the original research notes, with corrections as at November 2026.

## Results gallery

| Project | Status | Preview |
|---|---|---|
| [01 Shaded relief](projects/01-shaded-relief.md) | Planned | — |
| [02 Terrain diorama](projects/02-terrain-diorama.md) | Planned | — |
| [05 OSM city](projects/05-osm-city.md) | Planned | — |
| [09 Flood inundation](projects/09-flood-inundation.md) | Planned | — |
| [13 Route fly-through](projects/13-route-flythrough.md) | Planned | — |
| [14 LiDAR point cloud](projects/14-lidar-point-cloud.md) | Planned | — |

Update this table as projects are completed: change the status and add a thumbnail.
