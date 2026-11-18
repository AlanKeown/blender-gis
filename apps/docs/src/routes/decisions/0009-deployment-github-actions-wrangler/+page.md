---
title: "0009. Deployment: GitHub Actions with Wrangler to Cloudflare"
---

- **Status:** Accepted
- **Date:** 2026-11-18
- **Topic:** 14. Automation, CI and deployment (the parts needed to publish the sites)

## Context

Both sites are hosted on Cloudflare (0003). The repository is a pnpm monorepo with two
sites and a design-system submodule (0005, 0006, 0008), and CI already runs formatting,
linting and builds (0007). Deployment can be driven by Cloudflare's Git integration or by
the repository's own CI.

## Options considered

- **Cloudflare Git integration:** Cloudflare builds and deploys on each push, configured
  per project in the Cloudflare dashboard.
- **GitHub Actions with Wrangler:** a workflow in the repo checks, builds and deploys
  each site with Cloudflare's CLI.

## Decision

Deploy with a **GitHub Actions workflow** that, on pushes to `main`:

1. checks out the repo, with submodules;
2. installs Node.js from `.nvmrc` and dependencies with pnpm;
3. runs Prettier, ESLint and the builds;
4. deploys each site to **Cloudflare Workers with static assets**, using
   `wrangler deploy`.

Cloudflare credentials (an API token and account ID) are stored as GitHub Actions
secrets.

## Rationale

- One workflow, kept in the repo, covers checking, building and deploying both sites with
  the same lockfile and Node.js version used locally.
- The deployment is visible to readers in the repo, rather than living in a dashboard.
- Cloudflare is steering new projects towards Workers with static assets rather than
  Pages, so the sites start there.

## Consequences

- Each site has its own Wrangler configuration file in its app folder.
- Deployment needs a Cloudflare API token, scoped to the minimum permissions for
  deploying Workers, stored as a repository secret. Forks don't receive secrets, so
  readers' forks build but don't deploy.
- Standard GitHub-hosted runners are free for this public repo (0003).
- Pull requests can run the same checks and builds without deploying. Preview
  deployments can be added later.
- **Revisit if** Cloudflare's Git integration gains better monorepo support, or the free
  Workers limits stop fitting the sites.
