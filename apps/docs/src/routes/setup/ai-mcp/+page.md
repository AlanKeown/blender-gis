---
title: AI / MCP integration
---

An MCP-capable AI client (Claude Desktop, Claude Code, VS Code agents and others) can drive
**QGIS** for data preparation and **Blender** for scene building at the same time. Both
servers run on **Windows**, next to the applications they control.

```text
AI client ──stdio──► QGIS MCP server  ──TCP──► QGIS plugin   ──► PyQGIS
          ──stdio──► Blender MCP server ──TCP──► Blender add-on ──► bpy (+ BlenderGIS ops)
          ──HTTP───► (optional) Esri Location Services MCP, gis-mcp, …
```

## Blender: choose one server

| | **Blender Lab MCP Server** (official) | **MCP for Blender** (community) |
|---|---|---|
| Maintainer | Blender Lab (Blender Foundation) | Siddharth Ahuja (`ahujasid/mcp-for-blender`) |
| Blender version | 5.1 or newer | 4.x and 5.x |
| Focus | Analysis, debugging, scripting: Python API, bundled manual and API docs, scene summaries, screenshots | Scene creation: code execution, scene info, asset libraries, generative 3D |
| Install | Add-on from `blender.org/lab/mcp-server` (drag-and-drop twice: repository, then add-on); `.mcpb` bundle for Claude Desktop | `uvx mcp-for-blender` plus its Blender add-on (see the README) |
| Note | Executes LLM-generated code without sandboxing | Formerly `blender-mcp`, renamed September 2026; the old package name still works; optional safe mode for code execution |

For this repo, either works. The official server is the better fit for "explain or debug my
scene" tasks on 5.2 LTS; the community server adds asset search and generation. Neither
wraps BlenderGIS directly: the agent calls BlenderGIS through `bpy.ops` (e.g.
`bpy.ops.importgis.georaster(...)`) when the add-on is enabled.

## QGIS

1. In QGIS: **Plugins → Manage and Install → "QGIS MCP"** (official plugin repository;
   supports QGIS 3.28 to 4.x). Start its server from the toolbar.
2. Register the server with your client, pinning a release tag rather than `main`:

```bash
claude mcp add -s user qgis -- uvx --from https://github.com/nkarasiak/qgis-mcp/archive/refs/tags/<tag>.zip qgis-mcp-server
```

> **Port collisions**
>
> The Blender and QGIS add-ons each listen on a local TCP port, and some versions of
> both have defaulted to **9876**. Give them distinct ports (the QGIS plugin has a port
> selector; MCP for Blender accepts `--port`) before running both.

## Optional servers

| Server | When to add it |
|---|---|
| `gis-mcp` (Shapely, GeoPandas, Rasterio, PyProj, PySAL) | Headless geometry and raster operations without a QGIS window. Complementary; it does not replace the QGIS → Blender hand-off. |
| MCP for ArcGIS Location Services (Esri, beta) | Geocoding, routing, elevation, static maps. Hosted, Streamable HTTP, needs an ArcGIS Location Platform API key with beta access. |
| arcgis-mcp-bridge | Agent-run ArcPy geoprocessing with path guards and confirmation gates (Windows + licensed Pro). See [ArcGIS Pro track](/setup/arcgis-pro/). |

## Working rules for agents in this repo

1. **Agents call repo scripts; they don't improvise pipelines.** For example: "run
   the project's Blender build script with its `config.toml`". That keeps
   results reproducible without an agent in the loop.
2. **Write only under the data root's `derived/` folder** and the project's `results/`.
3. **Save before you let an agent touch a scene.** Both Blender servers execute arbitrary
   Python. Keep `.blend` working files out of Git and versioned by Blender's own backups.
4. **Log the prompt and outcome** in the project page's *Notes* section, so the
   AI-assisted steps are documented alongside the manual ones (project 19 makes this the
   subject).
