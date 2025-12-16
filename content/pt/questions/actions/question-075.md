---
question: "Em um workflow que possui múltiplos jobs, todos executando em runners hospedados pelo GitHub, é verdade que todos os jobs têm garantia de executar na mesma máquina runner?"
title: "Pergunta 075"
---

> https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners
1. [x] Não
1. [ ] Sim
> Cada job é executado em uma instância nova da imagem runner especificada por runs-on
1. [ ] Apenas se eles forem executados em paralelo
> Cada job é executado em uma instância nova da imagem runner especificada por runs-on
1. [ ] Apenas se usarem o mesmo label `runs-on`
> Cada job é executado em uma instância nova da imagem runner especificada por runs-on
