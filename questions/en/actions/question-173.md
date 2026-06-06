---
question: "An organization has several repositories that share a specialized Node.js environment hosted on a private network. The organization's next objective involves the setup of node-locking software within that network. Which of the following would best suit the organization's needs when it comes to executing workflows?"
documentation: "https://docs.github.com/en/actions/concepts/runners/self-hosted-runners"
---

- [x] Self-hosted runners set up at the organization-level
- [ ] One self-hosted runner per repository, set up at the repository level
> This would be duplicative and complex to manage. Repositories can reference the same organization-level runner, which is the correct approach in this situation.
- [ ] GitHub-hosted runners, with all workflows utilizing `actions/setup-node`
> GitHub-hosted runners are [ephermal](https://docs.github.com/en/actions/concepts/runners/github-hosted-runners#overview-of-github-hosted-runners), meaning that a new instance of the runner is set up per workflow run. This would not work well with node-locking software, which only allows the software to run on a specified device/VM. Additionally, while GitHub-hosted runners can be set up to access private networks, this is not out-of-the-box functionality.
- [ ] GitHub-hosted runners set up at the organization-level
> GitHub-hosted runners cannot be set up in this way.
- [ ] GitHub-hosted runners, using `runs-on: [node<version>]` (`<version>` being the desired Node version) in all workflows.
> `[node<version>]` does not point to any GitHub-hosted runner.