---
question: "In a workflow with multiple jobs, if job A fails then:"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-jobs#defining-prerequisite-jobs"
---

- [x] the jobs that are dependent on job A are skipped
- [ ] the jobs that are dependent on job A fail
- [ ] the workflow immediately cancels all other jobs
