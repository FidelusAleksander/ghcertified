---
title: "Questão 122"
question: "Quais são os escopos definidos para variáveis personalizadas em um fluxo de trabalho? (escolha três)"
---


> https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow
- [x] Todo o fluxo de trabalho, usando `env` no nível superior do arquivo de fluxo de trabalho
- [x] O conteúdo de um trabalho dentro de um fluxo de trabalho, usando `jobs.<job_id>.env`
- [x] Uma etapa específica dentro de um trabalho, usando `jobs.<job_id>.steps[*].env`
- [ ] Todos os trabalhos dentro de um fluxo de trabalho, usando `jobs.env`
- [ ] Todo o fluxo de trabalho, usando `custom.env` no nível superior do arquivo de fluxo de trabalho
- [ ] Um ambiente específico no repositório, usando `environment.<environment_id>.
