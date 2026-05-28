---
question: "Quais das seguintes afirmações são verdadeiras ao comparar os eventos pull_request e pull_request_target?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request"
---

- [x] O evento `pull_request` é executado no contexto do commit de merge, enquanto o `pull_request_target` é executado no contexto do branch padrão do repositório base.
> Para mais informações sobre commits de merge, consulte a [documentação](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) do GitHub. 
- [x] Os workflows não serão executados na atividade `pull_request` se houver um conflito de merge.
- [x] Tanto os eventos `pull_request` quanto `pull_request_target` possuem tipos de atividade padrão: `opened`, `synchronize` e `reopened`.
- [ ] O `pull_request` deve ser usado com cautela, já que PRs oriundos de forks permitirão que o workflow acesse todos os segredos dentro do repositório devido a estarem associados ao branch padrão.
> Isso é verdadeiro para `pull_request_target`; o `pull_request` não está associado ao branch padrão e, portanto, quando acionado por PRs de forks, o workflow terá acesso limitado a segredos. Veja a seção "pull_request_target" na [documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request_target) mencionada acima para mais informações.
- [ ] Os workflows não serão executados na atividade `pull_request_target` se houver um conflito de merge.
- [ ] O evento `pull_request_target` deve ser usado quando você deseja executar o código contido nos arquivos alterados de um PR, para realizar tarefas como verificações de CI ou executar suítes de testes.
> O `pull_request_target` é executado no contexto do branch padrão do repositório, o que pode levar à execução de código não confiável ao realizar atividades como verificações de CI ou suítes de testes. Consulte a [documentação](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/security/secure-use#mitigating-the-risks-of-untrusted-code-checkout) para mais informações. 
