---
title: "0002. Platform support for readers: reference platform plus portability notes"
---

- **Status:** Accepted
- **Date:** 2026-11-18
- **Topic:** 1. Host and operating system

## Context

The documentation is written for other people, who will use a range of operating systems.
Testing every step on every platform is costly; documenting only one platform leaves
readers guessing what transfers.

## Options considered

- **Reference platform only.** Document and test Windows + WSL2; claim nothing else.
- **Reference platform plus portability notes.** Test only the reference platform, but
  state what is expected to work elsewhere.
- **Multi-platform.** Test and document every step on Windows, Linux and macOS.

## Decision

Document and test on the **reference platform (Windows 11 + WSL2, see 0001)**, and add
**portability notes** where steps differ on native Linux or macOS.

## Rationale

- Blender, QGIS, the GDAL/PDAL stack and Node.js are cross-platform, so most content
  transfers with small changes, which are worth telling readers about.
- Only the reference platform is tested, which keeps maintenance realistic.

## Consequences

- Portability notes are marked as untested guidance, not supported procedures.
- The ArcGIS Pro track is stated as Windows-only.
- **Revisit if** contributors offer to test other platforms, or reader demand shows a
  clear need.
