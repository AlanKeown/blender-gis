# Environment overview

The environment is split by toolchain dependency: **Windows 11** runs the desktop
applications that need the GPU, a GUI or a Windows-only licence; **Ubuntu 26.04 on WSL2**
runs the open-source processing pipeline, headless jobs and the documentation site.

```text
┌──────────────────────────── Windows 11 host ─────────────────────────────┐
│  Blender 5.2 LTS (GUI, GPU)      QGIS 3.44 LTR / 4.x (OSGeo4W)           │
│  ArcGIS Pro 3.6/3.7 (optional)   VS Code (UI for both sides)             │
│  Git for Windows · uv · MCP servers (Blender, QGIS) · AI client          │
│                                                                          │
│  C:\Projects\AlanKeown_git\blender-gis   ← Windows working copy          │
│  C:\GISData\blender-gis                  ← shared data root (not in Git) │
└───────────────┬──────────────────────────────────────────────────────────┘
                │ /mnt/c/...                    \\wsl.localhost\Ubuntu-26.04\...
┌───────────────▼──────────── Ubuntu 26.04 on WSL2 ────────────────────────┐
│  micromamba env "bgis": GDAL · PDAL · Rasterio · GeoPandas · QGIS        │
│                         (qgis_process) · laspy · pytest · ruff           │
│  Blender 5.2 Linux binary (headless -b, Cycles on CUDA/OptiX)            │
│  Node.js: SveltePress docs · SvelteKit demo site · pre-commit            │
│                                                                          │
│  ~/src/blender-gis        ← WSL working copy (ext4)                      │
│  ~/scratch                ← fast staging for heavy processing            │
└──────────────────────────────────────────────────────────────────────────┘
```

## Why this split

| Decision | Reason |
|---|---|
| Blender GUI on Windows | Native GPU drivers, no WSLg OpenGL fallback. Under WSLg, OpenGL frequently falls back to software rendering (llvmpipe) even when CUDA works. |
| QGIS GUI on Windows | The QGIS MCP plugin must run inside the QGIS instance the AI client talks to, and the Windows build sees the same files as Blender and Pro |
| ArcGIS Pro on Windows | Windows 11 only. ArcPy cannot run in WSL. |
| Geo stack in WSL | conda-forge builds of GDAL/PDAL/QGIS are straightforward on Linux, scriptable, and isolated from Pro's Python |
| Headless renders in WSL (optional) | CUDA works in WSL through the Windows driver, so Cycles can render in batch without a GUI. EEVEE needs a working GPU display context, so render EEVEE on Windows. |
| Docs and demo sites in WSL | Node.js and Git tooling behave as on a Linux CI runner; mirrored networking makes dev servers reachable from Windows browsers |

## Setup order

1. [Windows host](windows.md): Blender, QGIS, Git, VS Code, uv
2. [WSL2 + Ubuntu 26.04](wsl.md): distro, micromamba env, headless Blender
3. [VS Code](vscode.md): two windows, two workspace files
4. [Repository](repository.md): clones, data root, line endings, LFS
5. [AI / MCP](ai-mcp.md): Blender and QGIS MCP servers
6. [ArcGIS Pro track](arcgis-pro.md) (optional)

> **Simplest viable start**
>
> If you mostly want to explore, skip WSL at first: install Blender and QGIS on
> Windows, keep the repo on Windows, and add WSL when you need Linux-native tooling
> (PDAL pipelines, batch renders, Docker). The repo layout below works either way.
