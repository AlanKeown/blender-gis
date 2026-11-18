---
title: '0001. Primary workstation: Windows 11 with WSL2'
---

- **Status:** Accepted
- **Date:** 2026-11-18
- **Topic:** 1. Host and operating system

## Context

The showcase combines Windows-only software (ArcGIS Pro, on an optional track) with an
open-source geospatial and web toolchain (GDAL, PDAL, QGIS processing, Node.js) that is
most at home on Linux. The workstation needs a GPU for Blender and must run desktop GIS
applications alongside AI/MCP integrations.

## Options considered

- **Windows 11 only.** Simplest: one filesystem, native GPU, ArcGIS Pro works. Weaker
  parity with Linux CI and servers.
- **Windows 11 + WSL2.** Linux-native tooling beside Windows-only applications. Costs two
  filesystems and path conventions; GUI apps and MCP servers must stay on Windows.
- **Native Linux** (dual-boot or dedicated). Best for the open-source stack, but no
  ArcGIS Pro and friction when switching.

## Decision

Use **Windows 11 with Ubuntu on WSL2**.

- Windows runs the GUI and GPU applications (Blender, QGIS desktop, ArcGIS Pro) and the
  MCP servers that drive them.
- WSL2 runs the Linux toolchain: geospatial processing, headless jobs and Node.js
  development.

## Rationale

- Keeps the ArcGIS Pro track possible without giving up a Linux-native toolchain.
- Matches the existing working pattern (web development in WSL2, GIS scripting on
  Windows).
- Gives close parity with Linux CI runners and servers.

## Consequences

- Two filesystems: cross-boundary I/O on `/mnt/c` is slow, and paths and line endings
  must be managed (see later decisions on repository layout).
- Blender's GUI stays on Windows, because WSLg OpenGL often falls back to software
  rendering.
- **Revisit if** ArcGIS Pro is dropped from scope, or WSL GPU and graphics support
  matures enough to run Blender's GUI reliably.
