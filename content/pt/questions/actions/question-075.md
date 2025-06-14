---
question: "Em um fluxo de trabalho com vários jobs, todos executando em runners hospedados no GitHub, é verdade que todos os jobs estão garantidos para serem executados na mesma máquina runner?"
title: "Pergunta 075"
---

> https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners
1. [x] Não
1. [ ] Sim
> Cada job é executado em uma nova instância da imagem do runner especificada por runs-on
