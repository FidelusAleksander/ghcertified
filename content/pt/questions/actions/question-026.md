---
question: "Um fluxo de trabalho reutilizável chamado `build` cria artefatos de arquivos zip. Como você passa a localização do arquivo zip para o fluxo de trabalho chamador que está chamando o fluxo de trabalho `build`? (Selecione três.)"
title: "Pergunta 026"
---

> https://docs.github.com/pt/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow

- [x] Você define uma saída no nível do fluxo de trabalho no fluxo de trabalho `build`
- [x] Você define uma saída no nível do trabalho no fluxo de trabalho `build`
- [x] No fluxo de trabalho `build` você grava a saída em `$GITHUB_OUTPUT` em um dos passos
- [ ] Todas as saídas são automaticamente passadas para os fluxos de trabalho chamadores
