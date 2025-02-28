---
question: "Em um workflow que possui múltiplos jobs, todos executados em runners hospedados pelo GitHub, é verdade que todos os jobs são garantidos a serem executados na mesma máquina runner?"
archetype: "questions"
title: "Questão 075"
---

> https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners
1. [x] Não
1. [ ] Sim
> Cada job é executado em uma nova instância de uma imagem de runner especificada por runs-on
