---
title: VS Code
---

Install VS Code **once, on Windows**, with the **WSL** extension. A VS Code window is either
local (Windows) or remote (WSL), never both, so you work with two windows:

| Window | Opened from | Folder | Interpreter | Used for |
|---|---|---|---|---|
| **Windows** | A Windows workspace file, e.g. `blender-gis.windows.code-workspace` | `C:\Projects\AlanKeown_git\blender-gis` | A Windows venv with Blender type stubs, or the ArcGIS Pro clone env | Blender scripts (run in Blender), ArcPy, QGIS GUI-side scripts |
| **WSL** | A WSL workspace file, e.g. `code ~/projects/javascript/alankeown_git/blender-gis/blender-gis.wsl.code-workspace` from Ubuntu | `~/projects/javascript/alankeown_git/blender-gis` | `~/micromamba/envs/bgis/bin/python` | Geo pipeline, tests, SveltePress and SvelteKit sites |

## Workspace files, not `.vscode/settings.json`, for interpreters

If you commit a `.vscode/settings.json`, both clones share it, so keep only **portable**
settings there (formatting, rulers, file associations). Put interpreter paths and anything
OS-specific in two workspace files at the repo root, one per OS, and open each with
**File → Open Workspace from File…**. A minimal pair:

```jsonc
// blender-gis.windows.code-workspace
{ "folders": [{ "path": "." }],
  "settings": { "python.defaultInterpreterPath": "${workspaceFolder}\\.venv\\Scripts\\python.exe" } }
```

```jsonc
// blender-gis.wsl.code-workspace
{ "folders": [{ "path": "." }],
  "settings": { "python.defaultInterpreterPath": "~/micromamba/envs/bgis/bin/python" } }
```

## Extensions

A suggested set, which you can list in `.vscode/extensions.json` so VS Code prompts for
them. VS Code installs UI extensions on Windows and workspace extensions on the WSL side
automatically.

| Extension | Why |
|---|---|
| `ms-vscode-remote.remote-wsl` | The WSL window |
| `ms-python.python`, `ms-python.vscode-pylance` | Python, environments, IntelliSense |
| `charliermarsh.ruff` | Lint and format |
| `JacquesLucke.blender-development` | Start Blender from VS Code, run and reload scripts and add-ons |
| `tamasfe.even-better-toml` | Project `config.toml` files |
| `redhat.vscode-yaml` | Environment files, CI workflows |
| `ms-toolsai.jupyter` | Exploratory notebooks in the WSL env |
| `svelte.svelte-vscode` | SveltePress and SvelteKit development |

## Blender autocomplete

Blender's own Python is not a normal interpreter VS Code can introspect. For type hints,
create a small Windows venv containing stubs that match your Blender version
(`fake-bpy-module` or `blender-python-stubs`), select it in the Windows workspace, and run
the scripts *inside* Blender, either through the Blender Development extension or headless:

```powershell
& "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" -b -P <script.py> -- --config <project>\config.toml
```

## Tasks

Worth considering in `.vscode/tasks.json`: dev-server and test tasks for the WSL window,
and a *run current script in Blender (headless)* task for the Windows window.
