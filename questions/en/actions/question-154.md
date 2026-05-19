---
question: "When would you build a Docker container action to share in the GitHub Actions marketplace?"
documentation: "https://docs.github.com/en/actions/concepts/workflows-and-actions/custom-actions#docker-container-actions"
---

- [x] Docker container actions ensure a consistent runtime environment and specific dependencies without users needing to handle these aspects themselves
- [ ] When you want to build an out-of-the-box, low-overhead action
> Docker container actions are not considered to be low-overhead as they require the use of an image (pre-built or specified by the `Dockerfile`), an entrypoint script, and possibly pre and post-entrypoint logic. 
- [ ] When you want to build an action with fast startup speed on Windows and macOS runners
> Docker containers can only be executed on Linux OS runners (`ubuntu-latest` for GitHub-hosted runners). They also take longer compared to JavaScript and composite actions.
- [ ] When you want to build an action that can be reused a bundle of steps within other workflows that run within the context of the calling workflow/action
> A "reusable bundle of steps" describes a composite action, not a Docker container action
- [ ] When you want to use an action with Docker, but do not wish to utilize an `action.yml` file
> All actions, regardless of type, must use an `action.yml` file
