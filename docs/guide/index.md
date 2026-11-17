# Guide overview

This guide covers four things:

1. **[What can be achieved](capabilities.md)**: the capability map. What Blender adds to
   GIS, what it does badly, and the categories of work worth showcasing.
2. **[Toolchain](toolchain.md)**: the add-ons, applications and AI/MCP servers involved,
   with their status as checked in November 2026.
3. **[Conventions](conventions.md)**: coordinate reference systems, local origins,
   vertical datums, units and hand-off formats. Get these right before anything else.
4. **[Setup](../setup/index.md)**: building the Windows 11 + Ubuntu-on-WSL2 development
   environment and managing the repository across both.

## The one-paragraph version

Use the GIS for geography and Blender for presentation. Prepare, reproject, clip and
check data in QGIS (or ArcGIS Pro), then hand Blender clean GeoTIFFs, GeoPackages and
LAS/LAZ in a projected, metre-based CRS, shifted to a recorded local origin. In Blender,
build terrain by displacement or triangulation, drive geometry and materials from
attributes with Geometry Nodes, light with physically correct sun positions, and render
stills, animations, physical models or web-ready glTF. Script everything in Python so
any project can be regenerated headlessly from a config file.

## What makes a good showcase project

Each project in the [catalogue](../projects/index.md) is chosen because it demonstrates
at least one thing a GIS package cannot easily do on its own:

| Blender strength | Why it matters for GIS |
|---|---|
| Physically based rendering (Cycles, EEVEE) | Relief, shadow, atmosphere and material cues that read instantly to non-specialists |
| Real cameras | Eye-level views, focal lengths that match photographs, orthographic map views |
| Displacement and Geometry Nodes | Attribute-driven geometry: extrusion, scattering, instancing at scale |
| Animation and simulation | Time series, rising water, moving routes, sun paths, fly-throughs |
| Python API (`bpy`) and headless mode | Reproducible, config-driven, batch pipelines |
| Mesh tooling and export | 3D printing, game engines, web viewers (glTF), digital-twin hand-off |

And it should be honest about what Blender does **not** provide: analysis results you can
defend. Flood extents, viewsheds, solar exposure and the like should be computed in a GIS
or a dedicated model, then *communicated* in Blender.
