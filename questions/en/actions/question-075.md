---
question: "In a workflow that has multiple jobs, all running on GitHub-hosted runners, is it true that all jobs are guaranteed to run on the same runner machine?"
documentation: "https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners"
---

- [x] No
- [ ] Yes
> Each job runs in a fresh instance of a runner image specified by runs-on
- [ ] Only if they run in parallel
> Each job runs in a fresh instance of a runner image specified by runs-on
- [ ] Only if they use the same `runs-on` label
> Each job runs in a fresh instance of a runner image specified by runs-on
