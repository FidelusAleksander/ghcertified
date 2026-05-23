---
question: "Which of the following are true when comparing the pull_request and pull_request_target events?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request"
---

- [x] The `pull_request` event runs within the context of the merge commit, while `pull_request_target` runs in the context of the default branch of the base repository.
> For more information about merge commits, see the GitHub [documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges). 
- [x] Workflows will not run on `pull_request` activity if there is a merge conflict, but this is not the case for `pull_request_target`.
- [x] Both `pull_request` and `pull_request_target` events have default activity types of `opened`, `synchronize`, and `reopened`.
- [] `pull_request` should be used with caution, since it will have access to all secrets within the repository due to being associated with the default branch.
> This is true for `pull_request_target`; `pull_request` is not associated with the default branch and thus has limited access to secrets. See the documentation linked above, specifically the "pull_request_target" section for more information.
- [] Workflows will not run on `pull_request_target` activity if there is a merge conflict, but this is not the case for `pull_request`.
- [] `pull_request` should be used with caution, since it will have access to all secrets within the repository due to being associated with the merge commit.
> While `pull_request` is associated with the merge commit, this means that it has limited access to secrets.