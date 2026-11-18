---
title: "0003. Additional compute and hosted services: free tiers, adopted selectively"
---

- **Status:** Accepted
- **Date:** 2026-11-18
- **Topic:** 1. Host and operating system

## Context

The workstation (0001) handles day-to-day work. Some jobs fit better elsewhere: long
animation renders, CI builds, and hosting results for readers. The project is a public
showcase, so free tiers are preferred, and readers should be able to reproduce the setup
without paying. Free-tier terms change (for example, Oracle halved its Always Free ARM
allowance in June 2026), so nothing here may be a single point of failure.

## Options considered

- **Rendering:** SheepIt (free community render farm), Kaggle Notebooks (about 30 GPU
  hours per week), Google Colab free tier, Lightning AI.
- **Always-on compute:** Oracle Cloud Always Free (ARM, no GPU), or the author's home
  Ubuntu server.
- **CI and development environments:** GitHub Actions, GitHub Codespaces.
- **Hosting and storage:** Cloudflare Pages/Workers, Cloudflare R2, Cesium ion Community,
  Supabase (PostGIS).
- **None:** workstation only.

## Decision

The repository is **public**.

| Role | Service | Status |
|---|---|---|
| CI (docs and site builds, tests, small CPU renders) | GitHub Actions, standard runners | Adopted |
| Hosting, docs (SveltePress) and demo site (SvelteKit) | Cloudflare Pages / Workers | Adopted |
| Large result assets (GLB, video, point clouds) | Cloudflare R2 | Adopted |
| Final animation renders of non-sensitive scenes | SheepIt render farm | Optional |
| Scripted headless batch renders | Kaggle Notebooks | Optional |
| Browser-based "try it" environment for readers (non-GPU parts) | GitHub Codespaces | Optional |
| Always-on compute | Home Ubuntu server, Oracle Cloud Always Free | Deferred to topics 7 and 14 |
| 3D Tiles streaming, hosted PostGIS | Cesium ion, Supabase | Deferred to topic 14 |
| Other GPU notebooks | Google Colab, Lightning AI | Not adopted |

## Rationale

- Standard GitHub-hosted runners are free and unmetered for public repositories.
- Cloudflare Pages serves static assets with unmetered bandwidth on the free plan, and R2
  has no egress fees, which suits large 3D and video assets.
- SheepIt and Kaggle cover occasional GPU rendering without hardware cost, with
  different strengths: SheepIt for distributed animation frames, Kaggle for scripted
  jobs with a predictable quota.
- Colab's free tier offers no guaranteed quota, and Lightning AI's terms couldn't be
  firmly verified. Neither is needed while SheepIt and Kaggle cover rendering.

## Consequences

- Nothing may depend on a free tier for correctness. Every rendered result must also be
  reproducible on the workstation.
- SheepIt distributes project files to volunteers' machines: use it only for scenes
  built from openly licensed data.
- Large binary results live in R2, not Git, so the site links to them.
- Quotas are recorded as of the decision date. Re-check them when a service is first
  used in anger.
- **Revisit if** a free tier is withdrawn or materially reduced, the repo becomes private
  (CI is no longer free and unmetered), or topics 7 and 14 settle the role of the home
  server.
