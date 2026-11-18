---
title: 19 AI-assisted pipeline via MCP
---

|                             |                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| **Group**                   | Pipelines & publishing                                                                      |
| **Showcases**               | An agent driving QGIS (prep) and Blender (build) through MCP; documenting AI-assisted steps |
| **Level**                   | Advanced                                                                                    |
| **Status**                  | Planned                                                                                     |
| **Data**                    | Any earlier project's inputs                                                                |
| **Tools**                   | QGIS MCP, Blender Lab MCP or MCP for Blender, an MCP client                                 |
| **Suggested code location** | `projects/19-agentic-pipeline/`                                                             |

## Goal

Re-run an earlier project (e.g. 05 or 13) end-to-end from a natural-language brief, with the agent calling QGIS for preparation and Blender for the scene, then compare the result and effort with the scripted version.

## Why Blender

It is an honest evaluation of where agents help (exploration, boilerplate, debugging) and where scripted pipelines are still better (reproducibility).

## Workflow

1. Brief: AOI, outputs and constraints (CRS, origin, data root) as a short prompt referencing the project config.
2. Agent uses QGIS MCP to fetch or clip/reproject and export to `derived/`.
3. Agent uses Blender MCP to run the project's own Blender build script (preferred) or to write scene code, then render.
4. Record the prompts, tool calls, failures and fixes; compare against the scripted run.

## Key techniques

- Multi-server agent workflows
- Guardrails: repo scripts, write-scoped folders

## Pitfalls

- Agents executing arbitrary bpy/PyQGIS code, so save first
- Port collisions between add-ons

## Outputs

A results page with a transcript excerpt and a comparison table

## Results

> **Not built yet**
>
> When this project is built, record the results here: a hero image, any animation or
> interactive embed, and a short write-up of what worked.

## Data and licences

| Dataset           | Source | Licence |
| ----------------- | ------ | ------- |
| _to be completed_ |        |         |

## Notes

_Build log, settings that mattered, and any AI-assisted steps._
