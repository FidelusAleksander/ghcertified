---
title: "Question 028"
date: 2023-08-25T14:35:20+02:00
draft: false
subject: []
---

# How can You ensure that a workflow called "Deploy Prod" is always running at most one at a time?
> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency

1. [x] Use `concurrency` on workflow level
```yaml
concurrency: ${{ github.workflow }}
```
1. [ ] Use `queue` on workflow level
```yaml
queue: ${{ github.workflow }}
```
1. [ ] Use `order` on workflow level
```yaml
order: ${{ github.workflow }}
```
1. [ ] Use `parallel` on workflow level
```yaml
parallel: ${{ github.workflow }}
```
