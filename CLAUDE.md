# CLAUDE.md

Guidance for Claude Code sessions in this repository.

## Project

`blender-gis` is a public showcase of what Blender can usefully do with geospatial data. It
has three parts:

- a **documentation site** (SveltePress, `apps/docs`);
- a **demo site** (SvelteKit, `apps/demo`) for project results;
- a **pipeline** (Python/Blender, `pipeline/`) that produces those results.

The author does the development. Your role is to help and advise, not to drive.

## How to work here

- **Recommend before acting.** For anything beyond a small, clearly requested change, set
  out the options and a recommendation, and wait for a decision.
- **Don't scaffold, add dependencies, or choose tools, structure or naming without asking.**
  If a task seems to need one of these, say so and ask.
- **Respect recorded decisions.** The decision records listed below are binding. If a task
  conflicts with one, point out the conflict rather than working around it. Changing a
  decision means a new record that supersedes the old one.
- **Write in British/Australian English** in docs, comments and commit messages.

## Decision records

Read the index first: `docs/decisions/README.md`. The records are moving into
`apps/docs/src/routes/` as the docs site is built, so check both places.

Key points, in summary (the records themselves are authoritative):

| Record | What it says |
|---|---|
| 0001 | Windows 11 + WSL2. Node.js, the sites and the geo pipeline run in WSL. Blender, QGIS and ArcGIS Pro run on Windows. |
| 0003 | Public repo. Free tiers only. Hosting on Cloudflare; CI on GitHub Actions; large assets in Cloudflare R2, not Git. |
| 0004 | VS Code: a WSL window for web and pipeline work, a Windows window for Blender, QGIS and ArcPy. Commit portable `.vscode` settings only; machine paths go in per-OS workspace files. |
| 0005 | One monorepo: `apps/docs`, `apps/demo`, `packages/` (shared components), `pipeline/`, `vendor/` (submodules). Two working copies (Windows and WSL), synced through GitHub. |
| 0006 | SveltePress for docs, SvelteKit for the demo, a **pnpm workspace** at the repo root. |
| 0007 | Node.js via **nvm**, pinned in `.nvmrc`. **TypeScript** by default. **Prettier + ESLint**, configured once at the root. |
| 0008 | `cii-design-system` is the default design system for all sites. It's a **Git submodule** at `vendor/cii-design-system`, consumed as the workspace packages `@cii/tokens` and `@cii/svelte`. |
| 0009 | Deployment: GitHub Actions + `wrangler deploy` to Cloudflare Workers with static assets. Credentials live in GitHub secrets, never in the repo. |

## Conventions

- Package manager: `pnpm` only (no `npm install` or `yarn`).
- After cloning: `git submodule update --init`.
- Keep large data and renders out of Git (see `.gitignore` and 0003).
- Existing reference content in `docs/` (guide, setup, project catalogue, research
  validation) is source material for the SveltePress site. When content moves, keep its
  meaning; ask before restructuring or rewriting.

## Tools

- The **Svelte MCP server** gives current Svelte 5 and SvelteKit documentation, plus an
  autofixer. Use it before relying on memory for Svelte APIs.
- The **Cloudflare MCP servers** (docs, builds, bindings) are for Cloudflare reference and
  deployment questions. Don't create or change Cloudflare resources without asking.
