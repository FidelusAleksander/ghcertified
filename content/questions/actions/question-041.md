---
question: "When should You use `caching`?"
archetype: "questions"
title: "Question 041"
draft: false
subject: []
---



> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching

1. [x] When you want to reuse files that don't change often between jobs or workflow runs, such as build dependencies from a package management system.
1. [ ] When you want to reuse files that do change often between jobs or workflow runs, such as build dependencies from a package management system.
1. [ ] When you want to save files produced by a job to view after a workflow run has ended, such as built binaries or build logs.
> Artifacts should be used for that https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
1. [ ] When you want to save binaries produced by a build job to use in a subsequent deploy job to deploy a new version of an application
> Artifacts should be used for that https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
