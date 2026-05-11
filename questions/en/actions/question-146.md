---
question: "Which statements are true regarding `github.ref` when the workflow is triggered by a `pull_request` event?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] In pull requests that have not been merged, `github.ref` refers to the fully-formed ref of the pull request merge branch/tag 
> For more information about refs, see the official [Git documentation](https://git-scm.com/book/en/Git-Internals-Git-References).
- [x] In pull requests that have been merged, `github.ref` refers to the fully-formed ref of the branch that was merged into.
- [ ] In pull requests (regardless of merge status), `github.ref` refers to the pull request number 
> For the `pull_request` event, the value of `github.ref` varies depending on whether the pull request was merged. This value will always be a ref, not the pull request number.
- [ ] In pull requests (regardless of merge status), `github.ref` is the SHA of the last merge commit on the `GITHUB_REF` branch.
> `github.sha` is what points to the latest SHA on the merge branch (ex. `refs/pull/PULL_REQUEST_NUMBER/merge`).  Refer to the [events documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request) for more details.
- [ ] In pull requests that have not been merged, `github.ref` is the fully-formed ref of the pull request title. 
> Refs are not formed from pull request titles. `github.event.pull_request.title` is what contains the pull request title. See the [documentation](https://docs.github.com/en/webhooks/webhook-events-and-payloads#pull_request) for more details.
- [ ] In pull requests that have been merged, `github.ref` is the type of fully-formed ref that triggered the workflow run. The value will either be `branch`, `tag`, or `null` (if the ref was not fully-formed).
> `github.ref_type` is the value of the ref type that triggered the workflow run. It can only contain `branch` or `tag`; `null` is not a valid value. Refer to the document link in this question for more details.