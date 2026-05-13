---
question: "¿Qué comando de GitHub CLI inicia una nueva sesión de agente en la nube de Copilot para trabajar de forma autónoma en una tarea?"
documentation: "https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-a-pr"
---

- [x] `gh agent-task create`
> `gh agent-task create` (requiere GitHub CLI v2.80.0+) inicia una sesión de agente en la nube que puede crear branches y pull requests.
- [ ] `gh copilot agent start`
> Este comando no existe en el GitHub CLI.
- [ ] `gh workflow run copilot-agent`
> Esto ejecutaría un workflow de GitHub Actions, no una sesión de agente en la nube de Copilot.
- [ ] `gh issue assign --copilot`
> Aunque puedes asignar issues a Copilot mediante la API, esta no es la sintaxis correcta del comando CLI.
