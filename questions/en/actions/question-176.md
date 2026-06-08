---
question: "Judith has a workflow that should be triggered every time a commit is made to the repository. The repository is not always that active, so Judith desires the workflow to programmatically run once a week as a failsafe. What combination of events should she use to enforce this behavior?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"
---

- [x] `push` and `schedule`
- [ ] `pull_request` (with `types:[closed]`) and `schedule`
> Pull requests can closed without being merged, and commits can be made to a repository without a pull request.
- [ ] `push` and `workflow_dispatch`
> The word "programmatically" in the question means that the workflow should be triggered in a non-manual way. Having users manually have to trigger a workflow every week is not reliable--it can and should be automated via `schedule` 
- [ ] `push` and `weekly`
> `weekly` is not a valid event. Use `schedule` with `cron` syntax to set the workflow to run weekly.
- [ ] This is not possible: `schedule` cannot be combined with other events