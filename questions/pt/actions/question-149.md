---
question: "O que escrever em `GITHUB_STEP_SUMMARY` faz?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#adding-a-job-summary"
---

```yaml
- name: "Escrever resultados do conjunto de testes"
  run: |
    echo "Os resultados do conjunto de testes são:" >> $GITHUB_STEP_SUMMARY
```
- [x] Adiciona esta linha ao resumo da tarefa
> Escrever em `GITHUB_STEP_SUMMARY` adiciona ao resumo da tarefa, que pode ser usado como uma versão simplificada do log do fluxo de trabalho.
- [ ] Adiciona esta linha como um subtítulo ao nome da etapa na interface do usuário do GitHub Actions
- [ ] Adiciona esta linha ao artefato embutido `github-steps-summary.md`
- [ ] Exibe esta linha como uma mensagem de depuração no nível da etapa
> Para exibir uma mensagem de depuração em uma etapa, você deve usar a sintaxe `::debug::`. Consulte a seção "Configurando uma mensagem de depuração" na documentação vinculada.
