---
question: "どのGitHub CLIコマンドが新しいCopilotクラウドエージェントセッションを開始し、タスクに自律的に取り組むことができますか？"
documentation: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions"
---

- [x] `gh agent-task create`
> `gh agent-task create`（GitHub CLI v2.80.0+が必要）は、ブランチやPull Requestを作成できるクラウドエージェントセッションを開始します。
- [ ] `gh copilot agent start`
> このコマンドはGitHub CLIには存在しません。
- [ ] `gh workflow run copilot-agent`
> これはGitHub ActionsのWorkflowを実行するコマンドであり、Copilotクラウドエージェントセッションを開始するものではありません。
- [ ] `gh issue assign --copilot`
> CopilotをAPI経由でIssueに割り当てることは可能ですが、これは正しいCLIコマンド構文ではありません。
