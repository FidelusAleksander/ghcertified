---
question: "Qual comando GitHub CLI inicia uma nova sessão de agente de nuvem do Copilot para trabalhar em uma tarefa de forma autônoma?"
documentation: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-a-pr"
---

- [x] `gh agent-task create`
> `gh agent-task create` (requer GitHub CLI v2.80.0+) inicia uma sessão de agente de nuvem que pode criar branches e pull requests.
- [ ] `gh copilot agent start`
> Este comando não existe no GitHub CLI.
- [ ] `gh workflow run copilot-agent`
> Este comando iniciaria um workflow do GitHub Actions, não uma sessão de agente de nuvem do Copilot.
- [ ] `gh issue assign --copilot`
> Embora seja possível atribuir issues ao Copilot via API, esta não é a sintaxe correta do comando CLI.
