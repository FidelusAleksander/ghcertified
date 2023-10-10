---
title: "Question 042"
draft: false
subject: []
---


# When should You use `artifacts`?

> https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts

- [x] Use artifacts to save files produced by a job to view after a workflow run has ended, such as test results or build logs.
- [x] Use artifacts to save binaries produced by a build job to use in a subsequent deploy job to deploy a new version of an application
- [ ] Use artifacts to reuse files that don't change often between jobs or workflow runs, such as build dependencies from a package management system.
> Caching should be used for that https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching
- [ ] Use artifacts to create new versions of Your application together with release notes, mentions and/or contributors
> That's a use case for releases, not artifacts
