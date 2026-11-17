# Windows host

Target: Windows 11 64-bit with a current GPU driver (NVIDIA Studio or Game Ready, AMD
Adrenalin, or Intel Arc). Run PowerShell as your normal user unless stated otherwise.

## 1. Base tools

```powershell
winget install --id Git.Git -e
winget install --id Microsoft.VisualStudioCode -e
winget install --id astral-sh.uv -e          # runs MCP servers via uvx
git config --global core.autocrlf false        # .gitattributes controls line endings
git config --global core.longpaths true
git config --global init.defaultBranch main
```

## 2. Blender 5.2 LTS

Download the **5.2 LTS** installer or portable zip from `blender.org/download/lts/5-2/`.
`winget install BlenderFoundation.Blender` installs the latest release, which may not be
the LTS. You can install versions side by side, since each version keeps its own config
directory under `%APPDATA%\Blender Foundation\Blender\<version>`.

Then, in **Edit → Preferences**:

1. **System → Cycles Render Devices**: choose OptiX (NVIDIA), HIP (AMD) or oneAPI (Intel).
2. **System → Network**: enable *Allow Online Access* (needed for Extensions, BlenderGIS
   basemaps and the official MCP add-on).
3. **Get Extensions**: install
    - *Sun Position*
    - *A.N.T. Landscape*
    - *Point Cloud IO* (needs 5.1+)
    - *3D Print Toolbox*
4. **Add-ons → ⌄ → Install from Disk…**: install
    - **BlenderGIS**: the zip from the latest GitHub release of `domlysz/BlenderGIS`.
      In its preferences, set a **cache folder** (e.g. `C:\GISData\cache\blendergis`) and
      paste your **OpenTopography API key** (free from opentopography.org).
    - **Blosm**: the zip from its Gumroad page (the base version is free). Do not unzip it.
5. Save preferences.

> **BlenderGIS on Blender 5.x**
>
> BlenderGIS is a legacy add-on, not a Blender Extension, and its releases lag Blender.
> On 5.0, users reported the cache-folder browse button failing, with a community fix
> posted in the project's discussions. Smoke-test on 5.2 before relying on it:
> basemap → Get SRTM → import a GeoTIFF DEM → import a Shapefile.

> **Python packages inside Blender**
>
> Blender ships its own Python with NumPy. Avoid pip-installing heavy GIS libraries into
> it. Do reprojection, clipping and raster maths in the WSL geo stack, and hand Blender
> clean files. Blender-side scripts should depend only on `bpy`, `bmesh`,
> `mathutils`, NumPy and the standard library.

## 3. QGIS

Use the **OSGeo4W network installer** from qgis.org (it makes upgrades and running LTR and
latest side by side easy):

- *Express install* → `QGIS LTR` (3.44) and/or `QGIS` (latest 4.x).
- QGIS 4 keeps its user profiles separate from QGIS 3, so plugins are installed per
  major version.

Plugins (**Plugins → Manage and Install**):

| Plugin | Use |
|---|---|
| QGIS MCP | Lets the AI client drive this QGIS instance (see [AI / MCP](ai-mcp.md)) |
| QuickOSM | Overpass queries into layers |
| QuickMapServices | Basemaps for context checks |
| OpenTopography DEM Downloader | SRTM / Copernicus / NASADEM by extent (API key) |
| Qgis2threejs | Direct three.js / glTF export, used as the comparison in project 17 |

## 4. Folders

```powershell
New-Item -ItemType Directory -Force C:\GISData\blender-gis\raw, C:\GISData\blender-gis\derived, C:\GISData\cache
```

The repository already lives at `C:\Projects\AlanKeown_git\blender-gis`. See
[Repository](repository.md) for how it relates to the WSL clone.

## 5. Optional

- **ArcGIS Pro 3.6/3.7**: see [ArcGIS Pro track](arcgis-pro.md).
- **ExifTool**: reads photo orientation for project 08.
- **FFmpeg** (`winget install Gyan.FFmpeg`): assembling and transcoding animation frames.
