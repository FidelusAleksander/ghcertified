---
question: "When should you use a Docker container action?"
documentation: "https://docs.github.com/en/actions/concepts/workflows-and-actions/custom-actions#docker-container-actions"
---

- [x] When you need to utilize runtime environments with consistent, specific dependencies and libraries
- [x] When you need full control over the execution environment
- [ ] When you want to write an out-of-the-box, low-overhead action
> Docker container actions are not considered to be low-overhead as they require the use of an image (pre-built or specified by the `Dockerfile`), an entrypoint script, and possibly pre and post-entrypoint logic. 
- [ ] When you want to write an action with fast startup speed on Windows and macOS runners
> Docker containers can only be executed on Linux OS runners (`ubuntu-latest` for GitHub-hosted runners). They also take longer compared to JavaScript and composite actions.
- [ ] When you want to reuse a bundle of steps within other workflows that run within the context of the calling workflow/action
> A "reusable bundle of steps" describes a composite action, not a Docker container action
- [ ] When you want to use an action with Docker, but do not wish to utilize an `action.yml` file
> All actions, regardless of type, must use an `action.yml` file
