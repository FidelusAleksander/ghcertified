---
question: "How does `respository_dispatch` enable systems outside of GitHub to trigger a workflow?"
documentation: "https://docs.github.com/en/rest/repos/repos?apiVersion=2026-03-10#create-a-repository-dispatch-event"
---

- [x] The external system makes a POST request to the GitHub API to create a repository dispatch event.
- [x] The workflow is triggered by the creation of a repository dispatch event 
> The result of the "Create a repository dispatch event" is a new `repository_dispatch` event (webhook), which `on.repository_dispatch` listens for. 
- [x] The `on.repository_dispatch.types` workflow key corresponds to the `event_type` parameter in the request payload, restricting the workflow to only trigger on relevant external events 
> See the [documentation](https://docs.github.com/en/webhooks/webhook-events-and-payloads#repository_dispatch) for examples of how `on.repository_dispatch.types` and `event_type` relate to each other.
- [ ] The external system makes a PUT request to the GitHub API to create a repository dispatch event
> The proper HTTP method for the "Create a repository dispatch event" is POST.
- [ ] The workflow is triggered by a POST request to the workflow using the following endpoint `/repos/OWNER/REPO/actions/workflows/<WORKFLOW_ID>/dispatches` 
> This endpoint corresponds to creating a workflow dispatch event, not a repository dispatch event. Furthermore, the GitHub API is what Actions-related requests should be made to--API calls cannot be made the workflow itself.
- [ ] `repository_dispatch`
