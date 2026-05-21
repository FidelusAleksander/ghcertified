---
question: "Petra is building a workflow whose sole job is named `post-merge`. How can she set up the job to be triggered upon a merged pull request?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#running-your-pull_request-workflow-when-a-pull-request-merges"
---

- [x]  Specify the `pull_request` activity type as `closed`, and use a job-level conditional to check if `github.event.pull_request.merged` is true
```yaml
on:
    pull_request:
        types: [closed]

jobs:
    post-merge:
        if: github.event.pull_request.merged == true
``` 
> To trigger a workflow job when a pull request is merged, you must specify both the activity type of the pull request in `on:` and set a job-level conditional.
- [ ]  Specify the `pull_request` activity type as `merged`, and use a job-level conditional to check if `github.event.pull_request.merged` is true
```yaml
on:
    pull_request:
        types: [merged]
jobs:
    post-merge:
        if: github.event.pull_request.merged == true
``` 
> The `pull_request` event does not have a `merged` activity type. See the "pull_request" section of the linked documentation to see the valid activity types for `pull_request`
- [ ]  Specify the `pull_request` activity type as `merged` (no need for a job-level conditional)
```yaml
on:
    pull_request:
        types: [merged]
jobs:
    post-merge:
``` 
> The `pull_request` event does not have a `merged` activity type.
- [ ] Specify the the `pull_request` activity type as `closed` (no need for a job-level conditional)
```yaml
on:
    pull_request:
        types: [closed]
jobs:
    post-merge:
``` 
> Pull requests can be closed without being merged. If you do not use a corresponding job-level conditional that checks whether the PR was merged, then the job will fire any time a PR is closed, not just when merging occurred.
- [ ]  Specify the the `pull_request` activity type as `closed` and use a job-level conditional to check if `github.ref` is equal to the merge branch of the pull request.
```yaml
on:
    pull_request:
        types: [closed]
jobs:
    post-merge: 
        if: ${{ github.ref == github.event.pull_request.base.ref }}
``` 
> After after a pull request has been merged, `github.ref` will be the *fully-formed ref* of the merge branch (ex. `refs/heads/main`), not simply the merge branch (ex. `main`). 