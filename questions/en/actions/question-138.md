---
question: "You want to create a workflow `Post-Deploy` that performs post-deploy related activity. What event trigger should the `Post-Deploy` workflow use so it runs automatically after a specified workflow is completed?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_run"
---

- [x] `workflow_run`
> `workflow_run` allows you to trigger a workflow once other specified workflows have completed (regardless of success). Note that while this question specifically asks about completed workflows, `workflow_run` can also be oriented to trigger a workflow when other specified workflows have been triggered or started processing on a runner
- [ ] `workflow_trigger`
> There is no such event trigger
- [ ] `workflow_dispatch`
> `workflow_dispatch` is used for manually triggering a workflow. See [the documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_dispatch) for more info.
- [ ] `workflow_call`
> `workflow_call` is used so a workflow can be called from other workflows or actions. See [the documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_call) for more info.