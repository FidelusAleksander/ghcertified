---
title: "Pergunta 122"
question: "Quais são os escopos definidos para variáveis personalizadas em um workflow? (escolha três)"
---


> https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow
- [x] Todo o workflow, usando `env` no nível superior do arquivo do workflow
- [x] O conteúdo de um job dentro de um workflow, usando `jobs.<job_id>.env`
- [x] Um passo específico dentro de um job, usando `jobs.<job_id>.steps[*].env`
- [ ] Todos os jobs dentro de um workflow, usando `jobs.env`
- [ ] Todo o workflow, usando `custom.env` no nível superior do arquivo do workflow
- [ ] Um ambiente específico no repositório, usando `environment.<environment_id>.env` no nível superior do arquivo do workflow
