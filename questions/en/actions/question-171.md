---
question: "Why would you re-run a workflow versus generating a new workflow run?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs"
---

- [x] Re-running a workflow lets you re-run failed workflow jobs, as opposed to generating a new run which will run all jobs.
- [x] Re-running a workflow means the workflow jobs run in the same context of the commit SHA and git ref of the original event that triggered the job
- [x] Re-running a workflow allows you to enable extra debug logging for the selected job(s).
- [ ] Re-running a workflow ensures `GITHUB_TRIGGERING_ACTOR` remains unchanged, so it is unambiguous as to who originally triggered the workflow
> Per the [documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context), the value of `GITHUB_TRIGGERING_ACTOR` is updated based on who re-ran the workflow.  
- [ ] Re-running a workflow ensures `GITHUB_ACTOR` is updated, so it is unambiguous as to who re-ran the workflow
> Per the [documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context), the value of `GITHUB_ACTOR` is who originally triggered the workflow; it does not change upon re-running a workflow.
- [ ] Re-running a workflow overwrites the failing job runs, making runs appear more straightforward.
> Failing job runs remain when a job is re-run. Using the UI, it is easy to toggle between the original job run and subsequent re-runs.  