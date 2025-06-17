---
question: "Um fluxo de trabalho reutilizável chamado `build` cria artefatos zip. Como você passa a localização do arquivo zip para o fluxo de trabalho chamador que está chamando o fluxo de trabalho `build`? (Selecione três.)"
title: "Questão 026"
---

> https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow

- [x] Você define uma saída no nível de fluxo de trabalho no fluxo de trabalho `build`
- [x] Você define uma saída no nível de trabalho no fluxo de trabalho `build`
- [x] No fluxo de trabalho `build`, você escreve a saída em `$GITHUB_OUTPUT` em um dos passos
- [ ] Todas as saídas são automaticamente passadas para os fluxos de trabalho chamadores

