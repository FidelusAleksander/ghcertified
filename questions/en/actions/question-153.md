---
question: "Which of the following events can trigger a workflow that has not been merged to the default branch?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request"
---

- [x] `workflow_dispatch`
> Note that while `workflow_dispatch` can be used to trigger the workflow from a non-default branch, the workflow must be triggered by some other event (i.e. `push`, `pull_request`) first. Also, note that `workflow_dispatch` must be triggered via the GitHub API or GitHub CLI, as the UI option will be unavailable since the workflow is not merged in the default branch.
- [x] `push`
- [x] `pull_request`
> To trigger a workflow via `pull_request` the branch containing the workflow must be the target branch of the pull request.
- [ ] `star`
- [ ] `issues`
- [ ] `issue_comment`