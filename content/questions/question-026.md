---
title: "Question 026"
date: 2023-08-25T14:35:09+02:00
draft: false
subject: []
---

# A reusable workflow named `build` creates zip file artifacts. How do You pass the zip file location to the caller workflow that is using the `build` workflow?
> https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow

- [x] You define an output on workflow level in the `build` workflow
> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-of-onworkflow_calloutputs
- [x] You define an output on job level in the `build` workflow
> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idoutputs
- [x] In the `build` workflow You write the output into `$GITHUB_OUTPUT` in one of the steps
- [ ] All outputs are automatically passed to the caller workflows
