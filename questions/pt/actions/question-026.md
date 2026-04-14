---
question: "Um workflow reutilizável chamado `build` cria artefatos de arquivos zip. Como você passa a localização do arquivo zip para o workflow que está chamando o workflow `build`?"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow"
---

- [x] Você define uma saída no nível do workflow no workflow `build`
- [x] Você define uma saída no nível do trabalho (job) no workflow `build`
- [x] No workflow `build` você escreve a saída em `$GITHUB_OUTPUT` em um dos passos
- [ ] Todas as saídas são automaticamente passadas para os workflows que chamam
