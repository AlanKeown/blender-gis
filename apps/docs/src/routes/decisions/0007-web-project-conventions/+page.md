---
title: '0007. Web project conventions: nvm, TypeScript, Prettier and ESLint'
---

- **Status:** Accepted
- **Date:** 2026-11-18
- **Topic:** 8. Web development stack

## Context

The documentation and demo sites (0006) need shared conventions: how Node.js versions are
managed in WSL, which language is the default, and how code is formatted and checked. The
conventions should apply to every site in the repository, so readers see one consistent
setup.

## Options considered

- **Node.js version management:** nvm (already installed in WSL), fnm, or a version
  pinned via Corepack.
- **Language:** TypeScript or JavaScript.
- **Formatting and linting:** Prettier, ESLint, both, or neither.

## Decision

- **Node.js:** managed with **nvm** in WSL. The repo pins the version in an `.nvmrc` file
  at the root.
- **Language:** **TypeScript** by default for every site, package and config file where
  the tooling supports it.
- **Formatting and linting:** both **Prettier** (formatting) and **ESLint** (code quality),
  configured once at the repo root and applied to all workspaces.

## Rationale

- nvm is already installed in WSL, and `.nvmrc` lets readers and CI select the same
  version.
- TypeScript catches errors early. The SvelteKit tooling and the project's design system
  are TypeScript-based.
- Prettier and ESLint have separate jobs: Prettier settles formatting, ESLint flags
  likely bugs. With one root configuration, every site is checked the same way.

## Consequences

- CI reads `.nvmrc` to choose its Node.js version, and runs Prettier and ESLint checks.
- ESLint is configured so that its rules don't conflict with Prettier's formatting.
- The recommended VS Code extensions (0004) should include Prettier and ESLint.
- **Revisit if** nvm becomes a source of friction in WSL or CI, or a combined
  formatter/linter replaces the Prettier + ESLint pair for Svelte projects.
