---
question: "Która komenda GitHub CLI rozpoczyna nową sesję Copilot cloud agent w celu autonomicznego wykonania zadania?"
documentation: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions"
---

- [x] `gh agent-task create`
> `gh agent-task create` (wymaga GitHub CLI w wersji 2.80.0+) rozpoczyna sesję cloud agent, która może tworzyć branche i pull requesty.
- [ ] `gh copilot agent start`
> Ta komenda nie istnieje w GitHub CLI.
- [ ] `gh workflow run copilot-agent`
> To uruchomiłoby workflow GitHub Actions, a nie sesję Copilot cloud agent.
- [ ] `gh issue assign --copilot`
> Chociaż można przypisywać issue do Copilot poprzez API, to nie jest poprawna składnia komendy CLI.
