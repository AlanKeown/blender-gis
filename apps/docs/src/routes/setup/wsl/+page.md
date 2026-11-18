---
title: WSL2 + Ubuntu 26.04
---

## 1. Install the distro

```powershell
wsl --update
wsl --list --online            # confirm the exact distro name for 26.04
wsl --install -d Ubuntu-26.04
```

Optional `%UserProfile%\.wslconfig` for a GIS workload:

```ini
[wsl2]
memory=24GB          # leave headroom for Windows apps
processors=8
swap=16GB
networkingMode=mirrored
```

Inside Ubuntu, `/etc/wsl.conf`:

```ini
[boot]
systemd=true

[automount]
options = "metadata,umask=22,fmask=11"
```

Restart with `wsl --shutdown` after editing either file.

## 2. GPU

Do **not** install an NVIDIA Linux driver inside WSL: the Windows driver provides CUDA to
WSL. Check:

```bash
nvidia-smi          # should list your GPU
```

CUDA compute (and therefore Cycles on CUDA/OptiX) works this way. OpenGL under WSLg often
falls back to `llvmpipe`, which is why the Blender **GUI** stays on Windows.

## 3. Geo stack with micromamba

Ubuntu 26.04's own archive carries an older QGIS (3.40.x), and the OSGeo UbuntuGIS and
qgis.org repositories were still adding 26.04 ("resolute") support during 2026. conda-forge
avoids that dependency entirely:

```bash
"${SHELL}" <(curl -L micro.mamba.pm/install.sh)    # official installer
exec "$SHELL"
micromamba env create -f bgis.yml       # the file below
micromamba activate bgis
gdalinfo --version && pdal --version && qgis_process --version
```

A suggested environment file (`bgis.yml`). Commit it to the repo and treat it as the single
source of truth, updating with `micromamba env update -f bgis.yml`:

```yaml
name: bgis
channels:
  - conda-forge
dependencies:
  - python=3.12
  - gdal
  - pdal
  - python-pdal
  - rasterio
  - rioxarray
  - geopandas
  - pyogrio
  - shapely
  - pyproj
  - laspy
  - lazrs-python
  - numpy
  - scipy
  - qgis            # PyQGIS + qgis_process for headless processing
  - jupyterlab
  - pytest
  - ruff
  - pre-commit
```

> **PyQGIS and qgis_process**
>
> The `qgis` package from conda-forge provides PyQGIS and `qgis_process` for headless
> processing. Use the Windows QGIS for interactive work and for the MCP plugin.

## 4. Headless Blender (optional)

Either use the Linux binary:

```bash
mkdir -p ~/opt && cd ~/opt
# download blender-5.2.x-linux-x64.tar.xz from blender.org/download/lts/5-2/
tar -xf blender-5.2.*-linux-x64.tar.xz
ln -sf ~/opt/blender-5.2.*-linux-x64/blender ~/.local/bin/blender
blender -b --python-expr "import bpy; print(bpy.app.version_string)"
```

If it reports missing shared libraries, install the ones `ldd ~/.local/bin/blender` lists
as "not found" (typically X11 and GL client libraries such as `libxi6`, `libxrender1`,
`libxkbcommon0`, `libsm6`, `libgl1`). Package names can carry a `t64` suffix on 26.04.

Or install Blender as a Python module, in its **own** environment, because `bpy` wheels
support only the Python version bundled with that Blender release:

```bash
blender -b --python-expr "import sys; print(sys.version)"   # find the bundled Python
micromamba create -n bpy python=3.X -c conda-forge          # use that exact minor version
micromamba activate bpy
pip install "bpy==5.2.*"
```

Select the GPU for Cycles in scripts:

```python
prefs = bpy.context.preferences.addons["cycles"].preferences
prefs.compute_device_type = "OPTIX"   # or "CUDA"
prefs.get_devices()
for d in prefs.devices:
    d.use = d.type in {"OPTIX", "CUDA"}
bpy.context.scene.cycles.device = "GPU"
```

## 5. Node.js for the SveltePress and SvelteKit sites

The documentation (SveltePress) and demo site (SvelteKit) need Node.js, which is separate
from the conda geo stack. Install a current LTS Node.js in WSL with your preferred version
manager. With `networkingMode=mirrored`, dev servers started in WSL are reachable from
Windows browsers at `localhost`.

## 6. Where to put data

- Shared, durable data: `/mnt/c/GISData/blender-gis` (the same folder Windows apps see).
- Heavy intermediate processing (PDAL pipelines, raster mosaics): stage into
  `~/scratch` on ext4, process, then copy deliverables back. Cross-filesystem I/O on
  `/mnt/c` is markedly slower than ext4.
