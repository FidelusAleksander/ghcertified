---
question: "Which statement is true regarding `github.ref`?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] In pull requests, `github.ref` can refer to the fully-formed ref of the pull request merge branch/tag or the branch that was merged into, depending on whether the pull request was merged. For workflows triggered by push, it is the branch or tag ref that was pushed. 
> For more information about refs, see the official [Git documentation](https://git-scm.com/book/en/Git-Internals-Git-References).
- [ ] In pull requests, `github.ref` can refer to the pull request number or the SHA of the merged branch depending on whether the pull request was merged. For workflows triggered by push, it is the message of the latest commit that was pushed.
> `github.ref` does not give the value of pull request numbers, the value of SHAs, nor commit messages. Refer to the document links in other answers to see what `github` context value is associated with these valyes.
- [ ] In pull requests, `github.ref` is the SHA of the latest commit of the pull request merge branch. For workflows triggered by push, `github.ref` is the commit SHA of the most recent commit.
> `github.sha` is what points to SHAs. The value of `github.sha` depends on the type of event triggered. Refer to the [events documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows) for more details.
- [ ] In pull requests, `github.ref` is the name of pull request title. For workflows triggered by push, `github.ref` is the commit message of the most recent commit.
> `github.event.pull_request.title` is what contains the pull request title. `github.event.head_commit.message` is what contains the latest commit message. See the [webhook events and payloads documentation](https://docs.github.com/en/webhooks/webhook-events-and-payloads) for more details.
- [ ] In pull requests and commits, `github.ref` is the type of fully-formed ref that triggered the workflow run. The value will either be `branch`, `tag`, or `null` (if the ref was not fully-formed).
> `github.ref_type` is the value of the ref type that triggered the workflow run. It can only contain `branch` or `tag`; `null` is not a valid value.