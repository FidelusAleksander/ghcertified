---
question: "In a workflow that has multiple jobs, all running on GitHub-hosted runners, is it true that all jobs are guaranteed to run on the same runner machine?"
title: "Question 075"
---

> https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners
1. [x] No
1. [ ] Yes
1. [ ] Only if they run in parallel
1. [ ] Only if they use the same `runs-on` label
> Each job runs in a fresh instance of a runner image specified by runs-on
