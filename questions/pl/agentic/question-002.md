---
question: "Która komenda GitHub CLI inicjuje nową sesję Copilot cloud agent, aby autonomicznie pracować nad zadaniem?"
documentation: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-a-pr"
---

- [x] `gh agent-task create`
> `gh agent-task create` (wymaga GitHub CLI w wersji 2.80.0+) inicjuje sesję cloud agent, która może tworzyć branche i pull requesty.
- [ ] `gh copilot agent start`
> Ta komenda nie istnieje w GitHub CLI.
- [ ] `gh workflow run copilot-agent`
> To uruchomiłoby workflow GitHub Actions, a nie sesję Copilot cloud agent.
- [ ] `gh issue assign --copilot`
> Chociaż możesz przypisywać issues do Copilot za pomocą API, to nie jest właściwa składnia komendy CLI.
