---
question: "Quais componentes podem ser reutilizados dentro de uma organização GitHub? (Selecione quatro.)"
archetype: "questions"
title: "Questão 072"
---

- [x] Secrets
- [x] Variáveis de Configuração
- [x] Runners Self-Hosted
- [x] Templates de Workflow
- [ ] Artifacts
> Artifacts são usados para preservar dados após a conclusão de um job e/ou compartilhar esses dados com outro job dentro do mesmo workflow.
- [ ] Cache
> Cache pode ser reutilizado em workflows dentro de um repositório
- [ ] Variáveis de Ambiente
> Variáveis de ambiente podem ser escopadas para um step, job ou workflow. Elas não podem ser compartilhadas entre workflows/repositórios ou organizações.
