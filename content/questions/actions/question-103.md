---
question: "In GitHub Actions, if you define both branches and paths filter, what is the effect on the workflow execution?"
archetype: "questions"
title: "Question 103"
draft: false
---


> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore
1. [x] the workflow will only run when both `branches` and `paths` are satisfied
1. [ ] the workflow will run when either `branches` or `paths` are satisfied, but will only apply the matching filter
1. [ ] the workflow will run when either `branches` or `paths` are satisfied
1. [ ] the workflow will not run when both `branches` and `paths` are satisfied
