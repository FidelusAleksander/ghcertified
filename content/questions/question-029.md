---
title: "Question 029"
date: 2023-08-25T15:19:45+02:00
draft: false
subject: []
---

# Your Pull Request analysis workflow uses multiple code analysis tools and takes about 20minutes to fully complete. It is triggered on `pull_request` event with `branches` filter set to `master`. Therefore if a developer pushes multiple commits within few minutes multiple workflows are running in parallel. How can You stop all previous workflow runs and only run the one with latest changes?
> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run

1. [x] Use concurrency with cancel-in-progress
```yaml
  concurrency:
    group: ${{ github.workflow }}-${{ github.ref }}
    cancel-in-progress: true
```
1. [ ] Use concurrency
```yaml
  concurrency:
    group: ${{ github.ref }}
```
> This would queue runs on that github ref. It will not stop previous runs

1. [ ] Use activity types filter
```yaml
  on:
    pull_request:
      branches:
        - master
      types: [latest]
```
> There is no such activity type as `latest` for pull_request event
1. [ ] Use cancel-in-progress flag for `pull_request` event
```yaml
  on:
    pull_request:
      branches:
        - master
      cancel-in-progress: true
```
