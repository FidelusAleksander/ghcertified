---
title: "Pergunta 122"
question: "Quais são os escopos definidos para variáveis personalizadas em um workflow? (escolha três)"
---


> https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow
- [x] Todo o workflow, utilizando `env` no nível superior do arquivo do workflow
- [x] O conteúdo de um job dentro de um workflow, utilizando `jobs.<job_id>.env`
- [x] Uma etapa específica dentro de um job, utilizando `jobs.<job_id>.steps[*].env`
- [ ] Todos os jobs dentro de um workflow, utilizando `jobs.env`
- [ ] Todo o workflow, utilizando `custom.env` no nível superior do arquivo do workflow
- [ ] Um ambiente específico no repositório, utilizando `environment.<environment_id>.env` no nível superior do arquivo do workflow
