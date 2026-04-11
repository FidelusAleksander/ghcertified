---
question: "A reusable workflow named `build` creates zip file artifacts. How do you pass the zip file location to the caller workflow that is calling the `build` workflow? (Select three.)"
title: "Question 026"
---

> https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow

- [x] You define an output on workflow level in the `build` workflow
- [x] You define an output on job level in the `build` workflow
- [x] In the `build` workflow you write the output into `$GITHUB_OUTPUT` in one of the steps
- [ ] All outputs are automatically passed to the caller workflows
