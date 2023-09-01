---
title: "Question 048"
date: 2023-09-01T13:17:10+02:00
draft: false
subject: []
---

# A job called `job2` is using artifacts created in `job1`. To make sure `job1` finished before `job2` starts looking for the artifacts how should You create that dependency?

> https://github.com/sede-x/osdu-dpsolutions-gha-commons/pull/40/commits/f46cc3161059ec787afa78c3875b9f5288d3f73c

1. [x] create this dependency using the `needs` keyword in `job2`
1. [ ] this dependency is created implicitly when using `actions/download-artifact` to download artifact from `job1`
1. [ ] create this dependency by defining `job2` after `job1` in the workflow's `.yaml` definition
1. [ ] create this dependency using the `concurrency` keyword in `job2`
