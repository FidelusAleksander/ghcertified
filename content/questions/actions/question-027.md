---
question: "What are the valid use cases for using **defaults**? (Select two.)"
archetype: "questions"
title: "Question 027"
draft: false
subject: []
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaults

- [x] Using defaults.run on workflow level to set default shell (e.g bash) for an entire workflow
- [x] Using defaults.run on job level to set default working-directory for all steps in a single job
- [ ] Using defaults.run on step level to set default shell (e.g bash) for that single step
> defaults.run can only be set on workflow or job level
- [ ] Using defaults.env on workflow level to set default environment variables for an entire workflow
> There is no such thing as defaults.env
- [ ] Using defaults.env on job level to set default environment variables for all steps in a single job
> There is no such thing as defaults.env
