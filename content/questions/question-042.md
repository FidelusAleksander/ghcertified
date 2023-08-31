---
title: "Question 042"
date: 2023-08-31T14:35:09+02:00
draft: false
subject: []
---


# When should You use `artifacts`?

```yaml
  uses: actions/upload-artifact@v3
```

> https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts

- [x] When you want to save files produced by a job to view after a workflow run has ended, such as test results or build logs.
- [x] When you want to save binaries produced by a build job to use in a subsequent deploy job to deploy a new version of an application
- [ ] When you want to reuse files that don't change often between jobs or workflow runs, such as build dependencies from a package management system.
> Caching should be used for that https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching
- [ ] When you want to reuse files that do change often between jobs or workflow runs, such as build dependencies from a package management system.
