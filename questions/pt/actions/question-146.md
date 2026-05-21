---
question: "Quais afirmações são verdadeiras sobre `github.ref` quando o fluxo de trabalho é acionado por um evento `pull_request`?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] Em pull requests que não foram mesclados, `github.ref` refere-se à ref totalmente formada da branch/tag de merge do pull request.
> Por exemplo, se o número do pull request (aberto) fosse #123, `github.ref` seria `refs/pull/123/merge`. Para mais informações sobre refs, veja a [documentação oficial do Git](https://git-scm.com/book/en/Git-Internals-Git-References).
- [x] Em pull requests que foram mesclados, `github.ref` refere-se à ref totalmente formada da branch na qual foi mesclado.
> Por exemplo, se você estivesse mesclando algo na branch `main`, `github.ref` seria `ref/heads/main` após o pull request ter sido mesclado.
- [ ] Em pull requests (independentemente do status de mesclagem), `github.ref` refere-se ao número do pull request.
> Para o evento `pull_request`, o valor de `github.ref` varia dependendo de o pull request ter sido mesclado ou não. Este valor será sempre uma ref, e não o número do pull request.
- [ ] Em pull requests (independentemente do status de mesclagem), `github.ref` é o SHA do último commit de mesclagem na branch `GITHUB_REF`.
> `github.sha` é o que aponta para o SHA mais recente na branch de mesclagem (ex. `refs/pull/PULL_REQUEST_NUMBER/merge`). Consulte a [documentação de eventos](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request) para mais detalhes (procure por `GITHUB_SHA`).
- [ ] Em pull requests que não foram mesclados, `github.ref` é a ref totalmente formada do título do pull request.
> As refs não são formadas a partir de títulos de pull requests. `github.event.pull_request.title` contém o título do pull request. Consulte a [documentação](https://docs.github.com/en/webhooks/webhook-events-and-payloads#pull_request) para mais detalhes.
- [ ] Em pull requests que foram mesclados, `github.ref` é o tipo de ref totalmente formada que acionou a execução do fluxo de trabalho. O valor será `branch`, `tag` ou `null` (se a ref não foi totalmente formada).
> `github.ref_type` é o valor do tipo de ref que acionou a execução do fluxo de trabalho. Ele só pode conter `branch` ou `tag`; `null` não é um valor válido. Consulte o link da documentação nesta pergunta para mais detalhes.
