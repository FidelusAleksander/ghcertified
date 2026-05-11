---
question: "Which statement is true regarding `github.ref` when the workflow is triggered by a push event?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] In push events, `github.ref` is the fully-formed ref of the branch or tag ref that was pushed. 
> For more information about refs, see the official [Git documentation](https://git-scm.com/book/en/Git-Internals-Git-References).
- [ ] In push events, `github.ref` is the message of the commit that triggered the workflow.
>  `github.event.head_commit.message` is what contains the latest commit message. See the [documentation](https://docs.github.com/en/webhooks/webhook-events-and-payloads#push) for more details.
- [ ] In push events, `github.ref` is SHA of the commit that triggered the workflow.
> `github.sha` is what points to the commit SHA. Refer to the [events documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows) and the document link in this question for more details.
- [ ] In push events, `github.ref` is the description of the commit that triggered the workflow.
- [ ] In push events, `github.ref` is the type of fully-formed ref that triggered the workflow run. The value will either be `branch`, `tag`, or `null` (if the ref was not fully-formed).
> `github.ref_type` is the value of the ref type that triggered the workflow run. It can only contain `branch` or `tag`; `null` is not a valid value. See the document link in this question for more details.