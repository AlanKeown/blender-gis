# blender-gis

A showcase of what Blender can usefully do with geospatial data: 20 documented
demonstration projects, a reproducible Windows 11 + Ubuntu-on-WSL2 environment, and a
documentation site that will hold each project's results.

**Approach:** QGIS first (ArcGIS Pro optional) for preparing and checking data; Blender
5.2 LTS for geometry, light, motion and output; everything scriptable and config-driven.

## Read the guide

The guide is the SveltePress site in [`apps/docs/`](apps/docs/src/routes/+page.md):

| Start here                                                                         |                                                                   |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [What can be achieved](apps/docs/src/routes/guide/capabilities/+page.md)           | The capability map, including what Blender does badly             |
| [Toolchain](apps/docs/src/routes/guide/toolchain/+page.md)                         | Add-ons, apps and MCP servers, with their status in November 2026 |
| [Conventions](apps/docs/src/routes/guide/conventions/+page.md)                     | CRS, local origin, vertical datum, hand-off formats               |
| [Setup](apps/docs/src/routes/setup/+page.md)                                       | Windows host, WSL2, VS Code, repository, AI/MCP, ArcGIS Pro       |
| [Project catalogue](apps/docs/src/routes/projects/+page.md)                        | The 20 projects and a suggested build order                       |
| [Research validation](apps/docs/src/routes/reference/research-validation/+page.md) | Claim-by-claim check of `research.txt`                            |
| [Decision records](apps/docs/src/routes/decisions/+page.md)                        | Why the environment and repository are set up as they are         |

## Run the docs site locally

In WSL, with nvm installed:

```bash
git clone --recurse-submodules https://github.com/AlanKeown/blender-gis.git
cd blender-gis
nvm install          # reads .nvmrc
corepack enable pnpm # pnpm version comes from package.json
pnpm install
pnpm dev:docs
```

In an existing clone, run `git submodule update --init` first.

## Status

All projects are **planned**; none has been built yet. See the
[catalogue](apps/docs/src/routes/projects/+page.md).
