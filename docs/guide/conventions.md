# Conventions

Coordinate handling matters more than any tool choice. Every project in this repo follows
these rules, and every project config records them.

## 1. Work in a projected, metre-based CRS

- Reproject all inputs in the GIS **before** they reach Blender.
- For NSW work, use **GDA2020 / MGA** zones, e.g. EPSG:7855 (zone 55) or EPSG:7856
  (zone 56). Elsewhere, use the appropriate UTM or national grid.
- Blender's default unit is the metre. Keep **1 Blender unit = 1 m**, and apply vertical
  exaggeration as an explicit, recorded scale on Z only, never by rescaling the scene.

## 2. Record the vertical datum

- State the height datum of each DEM (e.g. AHD in Australia, or ellipsoidal heights for
  some global products). Mixing ellipsoidal and orthometric heights produces offsets of
  tens of metres.
- Record units, no-data value and the min/max used for any heightmap normalisation.

## 3. Shift to a local origin

Blender stores vertex coordinates in single precision. At an MGA northing of ~6,200,000 m,
the representable spacing is about **0.5 m**, which is enough to make geometry shimmer and
cameras jitter. So:

- Choose an origin near the centre of the AOI, rounded to a convenient value
  (e.g. the nearest 1,000 m).
- Subtract it from every coordinate before or during import. BlenderGIS does this through
  its scene georeferencing; Point Cloud IO and Blosm do their own centring. For hand-rolled
  scripts, do it yourself.
- Store the origin, so any export can be transformed back.

## 4. One config per project

Every project reads the same TOML, whether the script runs in ArcPy, PyQGIS, the WSL geo
stack or Blender:

```toml
# projects/01-shaded-relief/config.toml
[aoi]
name = "example-ridge"
crs = "EPSG:7855"              # GDA2020 / MGA zone 55
bbox = [600000, 6000000, 620000, 6020000]   # minx, miny, maxx, maxy (m)

[vertical]
datum = "AHD"
units = "m"
exaggeration = 1.5

[blender]
origin = [610000, 6010000, 0]  # subtracted from all coordinates
unit_scale = 1.0

[raster]
resolution_m = 5
nodata = -9999
```

Keep machine-specific paths (data roots, executables) out of Git, e.g. in a git-ignored
`config/local.toml`. See [Repository](../setup/repository.md).

## 5. Hand-off formats

| Data | Format into Blender | Notes |
|---|---|---|
| Elevation | GeoTIFF (Float32), or 16-bit PNG/TIFF for displacement | Set image colour space to **Non-Color**. Never use 8-bit (it produces terracing). |
| Imagery / rendered maps | GeoTIFF or PNG + world file | Match the DEM extent exactly to simplify UV mapping |
| Vectors | Shapefile (BlenderGIS imports SHP, not GeoPackage or GeoJSON) | Encode categories as integers; strings do not reach Geometry Nodes |
| Tabular points | CSV (Geometry Nodes *Import CSV* node) | Numeric columns only; the header row becomes attribute names |
| Point clouds | LAS/LAZ (Point Cloud IO) or PLY | Thin with PDAL first |
| Out of Blender | PNG/EXR renders, MP4, glTF/GLB, STL/3MF, georeferenced GeoTIFF | Ship a `*.georef.json` sidecar (CRS + origin) with any mesh |

## 6. Attribution and licensing

- OpenStreetMap: "© OpenStreetMap contributors", ODbL.
- Google Photorealistic 3D Tiles: subject to Google Maps Platform terms, including
  attribution and restrictions on caching and offline use. Check them before publishing
  renders.
- Government open data: record each licence (often CC BY 4.0) in the project page's
  *Data* section.
