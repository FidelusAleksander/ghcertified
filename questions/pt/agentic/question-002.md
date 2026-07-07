---
question: "Qual comando do GitHub CLI inicia uma nova sessão de agente de nuvem do Copilot para trabalhar em uma tarefa autonomamente?"
documentation: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions"
---

- [x] `gh agent-task create`
> `gh agent-task create` (requer GitHub CLI v2.80.0+) inicia uma sessão de agente de nuvem que pode criar branches e pull requests.
- [ ] `gh copilot agent start`
> Este comando não existe no GitHub CLI.
- [ ] `gh workflow run copilot-agent`
> Isso executaria um workflow do GitHub Actions, não uma sessão de agente de nuvem do Copilot.
- [ ] `gh issue assign --copilot`
> Embora seja possível atribuir issues ao Copilot via a API, esta não é a sintaxe correta do comando CLI.
