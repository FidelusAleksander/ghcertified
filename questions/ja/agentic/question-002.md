---
question: "GitHub CLI のどのコマンドが新しい Copilot クラウドエージェントセッションを開始し、タスクを自律的に処理しますか？"
documentation: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-a-pr"
---

- [x] `gh agent-task create`
> `gh agent-task create`（GitHub CLI v2.80.0+ が必要）は、ブランチや Pull Request を作成できるクラウドエージェントセッションを開始します。
- [ ] `gh copilot agent start`
> このコマンドは GitHub CLI には存在しません。
- [ ] `gh workflow run copilot-agent`
> これは GitHub Actions のワークフローを実行するものであり、Copilot クラウドエージェントセッションではありません。
- [ ] `gh issue assign --copilot`
> API を介して Copilot に Issue を割り当てることはできますが、これは正しい CLI コマンド構文ではありません。
