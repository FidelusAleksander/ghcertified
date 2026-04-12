---
question: "Como você pode especificar o agendamento de um workflow do GitHub Actions para ser executado apenas em dias úteis?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule"
---

- [ ] adicionar uma condição no arquivo YAML do workflow para dias úteis
- [ ] não é possível no GitHub Actions
- [ ] usar o gatilho de evento on: schedule: weekdays
- [x] usar o gatilho de evento on: schedule: cron
