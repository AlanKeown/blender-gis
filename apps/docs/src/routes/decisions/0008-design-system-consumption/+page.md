---
title: "0008. Design system: cii-design-system by default, consumed as a Git submodule"
---

- **Status:** Accepted
- **Date:** 2026-11-18
- **Topic:** 8. Web development stack

## Context

Every site in this repository uses the author's design system,
[`AlanKeown/cii-design-system`](https://github.com/AlanKeown/cii-design-system), by
default. It provides design tokens (`@cii/tokens`) and Svelte 5 components (`@cii/svelte`).
Its packages are not published to any registry: its README describes building package
files with `npm pack` and installing them locally. The design system is likely to change
alongside these sites.

## Options considered

- **Local package files** (`npm pack` tarballs), as the design system's README describes.
- **GitHub Packages:** publish both packages under the author's account.
- **Git submodule** of the design-system repo, included in this repo's pnpm workspace.
- **Public npm:** publish both packages publicly.

## Decision

- `cii-design-system` is the **default design system for all sites** (`apps/docs`,
  `apps/demo` and any later ones).
- It is included as a **Git submodule** at `vendor/cii-design-system`, and its packages
  are added to the pnpm workspace. Sites depend on `@cii/tokens` and `@cii/svelte` as
  workspace packages.
- **When the design system stabilises**, publish it to public npm and switch the sites
  to the published packages. That change will be recorded in a superseding ADR.

## Rationale

- A submodule keeps the sites on a specific, recorded commit of the design system, with
  no publishing step while it is still evolving.
- GitHub Packages' npm registry needs an access token even to install public packages,
  which is a hurdle for readers and CI.
- Local package files need a manual rebuild and reinstall for every design-system change.
- Public npm is the best end state for readers, but not worth the maintenance until the
  design system is stable.

## Consequences

- Readers clone with `git clone --recurse-submodules`. Existing clones run
  `git submodule update --init`. The setup docs must say so.
- Updating the design system is an explicit step: move the submodule to a new commit,
  test, and commit the new pointer.
- CI checks out submodules (for example, `submodules: true` in `actions/checkout`).
- The design system's own workspace tooling (npm) is bypassed: only its packages are
  linked into this repo's pnpm workspace.
- **Revisit when** the design system is published to npm, or if the submodule causes
  friction for contributors.
