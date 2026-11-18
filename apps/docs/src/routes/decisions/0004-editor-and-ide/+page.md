# 0004. Editor and IDE: VS Code with two windows and committed portable config

- **Status:** Accepted
- **Date:** 2026-11-18
- **Topic:** 9. Editor and IDE

## Context

Work spans Windows-side tools (Blender scripts, ArcPy, QGIS) and WSL-side tools (the
geospatial pipeline, Node.js, the documentation and demo sites); see 0001. The repository
is public (0003), so readers benefit if the editor setup works when they open it.

## Options considered

- **Editor:** VS Code; VS Code forks with built-in AI (Cursor, Windsurf); JetBrains IDEs
  (WebStorm, PyCharm).
- **Window model:** two windows (Windows-local and WSL-remote), or one WSL window that
  calls Windows executables.
- **Committed config:** commit portable settings and extension recommendations, or
  commit nothing.

## Decision

- **Editor:** VS Code, installed once on Windows, with the WSL extension.
- **Window model:** two windows.
  - A *Windows-local* window for Blender scripts, ArcPy and QGIS-side scripts.
  - A *WSL-remote* window for the geospatial pipeline, Node.js, and the docs and demo
    sites.
- **Committed config:**
  - `.vscode/settings.json` holds portable settings only.
  - `.vscode/extensions.json` holds extension recommendations.
  - Two per-OS workspace files hold interpreter paths and anything OS-specific.

## Rationale

- VS Code has the official Svelte extension, the Blender Development extension and mature
  Remote-WSL support, and is already in use on both sides.
- A VS Code window is either local or remote. Two windows keep each toolchain on its
  native interpreter and filesystem.
- Committed recommendations give readers a working setup, and keeping machine paths in
  workspace files stops one person's paths from breaking another's.

## Consequences

- The recommended extensions include Svelte, Python/Pylance, Ruff, Blender Development,
  TOML, YAML and Remote-WSL.
- Interpreter paths in the workspace files are examples; readers adjust them.
- AI assistance comes from tools outside the editor (Claude Code, MCP servers), not from
  an AI-specific fork.
- **Revisit if** VS Code's WSL or Svelte support regresses, or the project adopts a
  different AI-integrated editor.
