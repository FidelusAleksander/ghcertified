---
question: "Which of the following events can trigger a workflow that has not been merged to the default branch?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request"
---

- [x] `push`
- [x] `pull_request`
> To trigger a workflow via `pull_request` the branch containing the workflow must be the target branch of the pull request.
- [ ] `repository_dispatch`
- [ ] `star`
- [ ] `issues`
- [ ] `issue_comment`