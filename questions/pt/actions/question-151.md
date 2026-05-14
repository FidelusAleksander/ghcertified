---
question: "O que você deve usar ao passar informações entre jobs: saídas de job ou `GITHUB_ENV`?"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables#passing-values-between-steps-and-jobs-in-a-workflow"
---

- [x] Saídas de job, porque o valor das variáveis de ambiente definidas escrevendo para `GITHUB_ENV` se aplica apenas ao job atual.
> Embora `env` possa ser definido no nível do workflow (significando que suas variáveis podem ser referenciadas por múltiplos jobs), isso não significa que alterar o valor da variável de ambiente permaneça além do job que a alterou.
- [ ] `GITHUB_ENV`, porque as saídas de job só podem ser definidas e referenciadas dentro do mesmo job.
- [ ] Saídas de job, porque são mais simples de configurar
> Configurar e referenciar saídas de job é mais complicado do que utilizar `GITHUB_ENV`. Por exemplo, saídas de job exigem configurar um bloco de `outputs`, adicionar um `id` a uma etapa e usar `needs` para indicar dependências.
- [ ] `GITHUB_ENV`, porque usá-lo para definir variáveis de ambiente coloca significativamente menos pressão no runner, reduzindo o tempo de execução do workflow.
