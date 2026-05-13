---
question: "Which GitHub CLI command starts a new Copilot cloud agent session to work on a task autonomously?"
documentation: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-a-pr"
---

- [x] `gh agent-task create`
> `gh agent-task create` (requires GitHub CLI v2.80.0+) starts a cloud agent session that can create branches and pull requests.
- [ ] `gh copilot agent start`
> This command does not exist in the GitHub CLI.
- [ ] `gh workflow run copilot-agent`
> This would run a GitHub Actions workflow, not a Copilot cloud agent session.
- [ ] `gh issue assign --copilot`
> While you can assign issues to Copilot via the API, this is not the correct CLI command syntax.
