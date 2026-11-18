---
title: Repository
---

## Suggested layout

How you structure the repo is up to you. This is one layout that suits the Windows + WSL
split. The SveltePress documentation and SvelteKit demo site sit alongside it, wherever you
choose to place them.

```text
blender-gis/
├── README.md
├── research.txt                  # original research notes (kept for provenance)
├── .gitattributes  .gitignore
├── bgis.yml                      # WSL conda-forge environment (see WSL setup)
├── config/
│   └── local.toml                # git-ignored: data root, executables (one per machine)
├── src/bgis/                     # pure-Python helpers that run anywhere, including inside Blender
├── scripts/
│   ├── processing/               # WSL geo stack (GDAL, Rasterio, PDAL)
│   ├── qgis/                     # PyQGIS / qgis_process
│   ├── arcpy/                    # Windows + ArcGIS Pro only
│   └── blender/                  # runs inside Blender (bpy); no third-party imports
├── projects/
│   └── NN-slug/                  # one folder per project: config.toml + scripts
└── tests/
```

Two rules keep the cross-platform split sane:

1. Scripts for ArcPy, PyQGIS and Blender **never import each other**. Put shared logic
   (config loading, origin maths, naming) in a standard-library-only module.
2. **No absolute paths in code.** Read paths from a machine-specific, git-ignored config
   and from portable per-project `config.toml` files.

## Two clones, one remote

```text
Windows:  C:\Projects\AlanKeown_git\blender-gis     (Blender, QGIS GUI, ArcPy)
WSL:      ~/projects/javascript/alankeown_git/blender-gis   (geo pipeline, tests, Node.js sites)
Remote:   GitHub (origin)
```

Each toolchain gets a native filesystem: Windows tools on NTFS, Linux tools on ext4. That
avoids slow `/mnt/c` Git operations from WSL and flaky `\\wsl.localhost` paths in Windows
applications. Sync through the remote: **commit and push before switching windows, pull
when you arrive.**

> **Alternative: one checkout**
>
> For a quick experiment, a single Windows checkout opened from WSL via
> `/mnt/c/Projects/...` works. Code edits are fine; heavy I/O and file watching are slow.
> The research notes recommended both approaches at different points. Two clones is the
> recommendation here because the repo runs Linux tooling (Node.js builds, tests, PDAL)
> routinely.

### First-time setup

```powershell
# Windows: turn the existing folder into the repo and publish it
cd C:\Projects\AlanKeown_git\blender-gis
git init
git add .
git commit -m "Initial commit"
gh repo create blender-gis --public --source . --remote origin --push   # or add a remote manually
```

```bash
# WSL: second working copy
cd ~/projects/javascript/alankeown_git
gh repo clone AlanKeown/blender-gis
cd blender-gis   # then create config/local.toml with this machine's paths
```

Create a separate `config/local.toml` on Windows, with Windows paths.

## Line endings

A suggested `.gitattributes` normalises everything to LF except Windows scripts:

```text
* text=auto eol=lf
*.ps1 text eol=crlf
*.bat text eol=crlf
*.cmd text eol=crlf
*.blend binary
*.tif binary
*.laz binary
```

Set `git config --global core.autocrlf false` on both sides so Git doesn't fight the
attributes file.

## What goes in Git, and what doesn't

| Commit                                                                         | Ignore                                                                            |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Code, configs, environment files, docs                                         | Downloaded data: DEMs, imagery, LiDAR, OSM extracts                               |
| Small sample data (< 5 MB) for tests                                           | Derived rasters, meshes, caches                                                   |
| Result images for the docs and demo sites (optimised JPEG/WebP, ≲ 500 KB each) | Full-resolution renders, frame sequences, EXR                                     |
| Project `.blend` _templates_ only if small                                     | Working `.blend` files, `.blend1` backups                                         |
|                                                                                | `config/local.toml`, API keys, `.env`                                             |
|                                                                                | QGIS `.qgz~` locks, ArcGIS `.aprx` backups, site build output and `node_modules/` |

`.qgz`, `.aprx` and `.blend` files are binary and cannot be merged. Prefer **regenerating
scenes from scripts** over committing them. If you must version them, use Git LFS and
never edit the same file in two clones concurrently. If a CI workflow builds a site from
LFS-tracked images, it must check out with LFS enabled (e.g. `lfs: true` in
`actions/checkout`).

## Videos

Host long animations externally (YouTube, Vimeo, or a release asset) and embed them, or
keep short MP4/WebM loops under ~10 MB in the demo site's static assets.

## Branching

Keep `main` deployable. Use short-lived branches per project (`project/05-osm-city`) and
merge when the project page's _Results_ section is complete.
