---
question: "In what ways can you delete workflow artifacts?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts"
---

- [x] By using the Github Actions UI to navigate to a workflow run and delete the artifacts indvidually
- [x] By using the Github Actions UI to delete the workflow run that generated the artifacts
> Deleting a workflow run also deletes the artifacts associated with the run. 
- [x] By using a specific GitHub API endpoint
> The Github API has a "Delete an artifact" endpoint. See the [documentation](https://docs.github.com/en/rest/actions/artifacts?apiVersion=2026-03-10#delete-an-artifact) for more details.
- [ ] By using the `actions/delete-artifact` action in a workflow 
- [ ] By remotely accessing self-hosted runners via SSH, navigating to the `.github/artifacts` directory, and deleting the selected artifacts
> Artifacts are generally stored using GitHub infrastructure, not runners. 
- [ ] By setting the artifact retention period to 0 days
> Artifact retention periods cannot be set to 0 days. See the [documentation](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization) for more information.