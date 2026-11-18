# 0006. Web tooling: SveltePress and SvelteKit, pnpm workspaces, Node.js in WSL

- **Status:** Accepted
- **Date:** 2026-11-18
- **Topic:** 8. Web development stack (the parts needed to start the docs site)

## Context

The documentation site is being built first, and the demo site will follow. Both are
Svelte-based and live in one repository (0005). They need a package manager, a workspace
model, and an agreed place for Node.js to run.

## Options considered

- **Site frameworks:** chosen by the project owner before this record. SveltePress for
  documentation; Svelte with SvelteKit for the demo site.
- **Workspaces and package manager:**
  - two independent Node.js projects (npm or pnpm);
  - pnpm workspaces;
  - npm workspaces.
- **Where Node.js runs:** WSL or Windows.

## Decision

- **Documentation site:** SveltePress, in `apps/docs`.
- **Demo site:** Svelte + SvelteKit, in `apps/demo`.
- **Workspaces:** a pnpm workspace at the repo root covering `apps/*` and `packages/*`.
- **Node.js:** runs in WSL (the WSL working copy, see 0005), at a current LTS version.

## Rationale

- pnpm workspaces give one install for both sites and make shared components in
  `packages/` straightforward. pnpm is fast and disk-efficient.
- Running Node.js in WSL follows from 0001 and 0005: ext4 performance for installs and
  file watching, and parity with Linux CI runners.

## Consequences

- One `pnpm-lock.yaml` at the repo root; CI installs once for both sites.
- Both sites build to static output for Cloudflare Pages (0003). Any server-side
  features must fit the Workers free plan.
- Readers need pnpm. The docs should say so in their setup section.
- **Revisit if** SveltePress becomes unmaintained or can't support required features, or
  pnpm workspaces cause friction with either framework's tooling.
