---
title: "0005. Repository layout: one public monorepo, two working copies"
---

- **Status:** Accepted
- **Date:** 2026-11-18
- **Topic:** 10. Repository and file-system layout

## Context

The project has three parts: a documentation site (SveltePress), a demo site (SvelteKit)
and a Python/Blender pipeline that produces the results both sites show. SveltePress uses
SvelteKit's project structure, with Markdown pages at `src/routes/<path>/+page.md`, so
documentation content has to live inside a SveltePress project. Development spans Windows
and WSL (0001).

## Options considered

- **Repositories:** one monorepo, or separate repos for docs, demo and pipeline.
- **Layout:** `apps/` + `packages/` + `pipeline/`, or a flat `docs/`, `demo/`,
  `pipeline/`.
- **Working copies:**
  - two clones, Windows and WSL, synced through GitHub;
  - one clone in WSL ext4;
  - one Windows clone used from WSL over `/mnt/c`.

## Decision

One public repository (`blender-gis`), laid out as:

```text
blender-gis/
├── apps/
│   ├── docs/        SveltePress documentation site (including decision records)
│   └── demo/        SvelteKit demo site
├── packages/        shared Svelte components used by both sites (optional, added as needed)
├── pipeline/        Python: shared helpers, GIS and Blender scripts, per-project configs
├── vendor/          Git submodules, e.g. cii-design-system (see 0008)
└── README.md, research.txt, repo-level config
```

Two working copies, synced through GitHub:

- **Windows:** `C:\Projects\AlanKeown_git\blender-gis`, for Blender, QGIS and ArcPy work.
- **WSL:** `~/projects/javascript/alankeown_git/blender-gis` on ext4, for Node.js, the sites and the geospatial
  pipeline.

## Rationale

- A single repo keeps the showcase in one place. Docs can link directly to code and
  results, and there's one CI setup.
- `apps/` and `packages/` make sharing components between the two sites straightforward
  (for example, a 3D model viewer).
- Each toolchain gets its native filesystem, avoiding slow `/mnt/c` I/O for Node.js and
  unreliable `\\wsl.localhost` paths for Windows GIS applications.

## Consequences

- The existing `docs/` Markdown (guide, setup, project catalogue, research validation)
  and these decision records (provisionally in `docs/decisions/`) move into
  `apps/docs/src/routes/` when the docs site is created.
- Commit and push before switching windows, and pull on arrival. The two clones may
  briefly differ.
- Files written into the Windows folder by tools that only see it (such as AI assistants
  connected to that folder) reach WSL through a commit and pull.
- Large data and renders stay outside Git (see 0003 for hosted assets).
- **Revisit if** the repo grows too large for one CI pipeline, or the parts need
  separate release cycles.
