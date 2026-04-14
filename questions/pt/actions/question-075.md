---
question: "Em um fluxo de trabalho com múltiplos jobs, todos executados em runners hospedados pelo GitHub, é verdade que todos os jobs são garantidos a serem executados na mesma máquina runner?"
documentation: "https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners"
---

- [x] Não
- [ ] Sim
> Cada job é executado em uma nova instância de uma imagem de runner especificada por runs-on
- [ ] Apenas se eles forem executados em paralelo
> Cada job é executado em uma nova instância de uma imagem de runner especificada por runs-on
- [ ] Apenas se eles usarem o mesmo rótulo `runs-on`
> Cada job é executado em uma nova instância de uma imagem de runner especificada por runs-on
