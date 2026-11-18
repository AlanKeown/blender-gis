---
title: 07 Sun and shadow study
---

|                             |                                                                               |
| --------------------------- | ----------------------------------------------------------------------------- |
| **Group**                   | Urban & site                                                                  |
| **Showcases**               | Physically placed sun; time-lapse shadows across a day or the solstices       |
| **Level**                   | Introductory                                                                  |
| **Status**                  | Planned                                                                       |
| **Data**                    | Building massing (project 05 or a proposal), DEM, site latitude and longitude |
| **Tools**                   | Blender Sun Position extension, Cycles or EEVEE                               |
| **Suggested code location** | `projects/07-sun-shadow-study/`                                               |

## Goal

Animate shadows cast by a proposed building and its surrounds at hourly steps on the winter solstice, equinox and summer solstice.

## Why Blender

Shadow diagrams are a staple of planning applications. Blender produces them quickly and attractively, and can render plan views and eye-level views from the same scene.

## Workflow

1. Set the site's latitude, longitude and UTC offset in Sun Position (Properties → World); set North Offset if the scene isn't grid-north aligned.
2. Keyframe the time from 09:00 to 15:00; render a plan-view orthographic sequence and a street-level camera.
3. Overlay the proposal outline and the existing shadow so that the _additional_ overshadowing is clear.
4. Cross-check one timestamp against an independent solar calculator.

## Key techniques

- Sun Position Sun Object mode
- Shadow-catcher materials
- Holdout / mask passes

## Pitfalls

- Grid north vs true north (meridian convergence) in MGA
- Daylight saving time in the UTC offset
- This is a visual aid; formal assessments may require certified tools

## Outputs

Shadow diagram sheet, MP4 sweep

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
