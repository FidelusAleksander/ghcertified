---
question: "In what ways can you download an artifact?"
documentation: "https://github.com/actions/upload-artifact#inputs"
---

- [x] By using the `actions/download-artifact` action in a workflow 
- [x] By downloading artifacts from the Github Actions UI workflow run
> Using the UI allows you a hands-on approach to downloading artifacts. See the [documentation](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/download-workflow-artifacts) for more details.
- [x] By using a specific GitHub API endpoint
> The Github API has a "Download an artifact" endpoint. See the [documentation](https://docs.github.com/en/rest/actions/artifacts?apiVersion=2026-03-10#download-an-artifact) for more details.
- [ ] By using the `actions/upload-artifact` action in a workflow
> `actions/upload-artifact` is used to upload artifacts, not download them 
- [ ] By remotely accessing self-hosted runners via SSH and accessing the `.github/artifacts` directory
> Artifacts are stored using GitHub infrastructure, not runners. 