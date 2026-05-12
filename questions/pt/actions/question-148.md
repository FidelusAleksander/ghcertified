---
question: "Qual afirmação é verdadeira em relação ao `github.ref` quando o workflow é acionado por um evento de push?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] Em eventos de push, `github.ref` é a referência completamente formada do branch ou tag que foi enviado. 
> Para mais informações sobre referências, consulte a documentação oficial do [Git](https://git-scm.com/book/en/Git-Internals-Git-References).
- [ ] Em eventos de push, `github.ref` é a mensagem do commit que acionou o workflow.
> `github.event.head_commit.message` contém a última mensagem de commit. Consulte a [documentação](https://docs.github.com/en/webhooks/webhook-events-and-payloads#push) para mais detalhes.
- [ ] Em eventos de push, `github.ref` é o SHA do commit que acionou o workflow.
> `github.sha` é o que aponta para o SHA do commit. Consulte a [documentação de eventos](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows) e o link do documento nesta pergunta para mais detalhes.
- [ ] Em eventos de push, `github.ref` é a descrição do commit que acionou o workflow.
- [ ] Em eventos de push, `github.ref` é o tipo de referência completamente formada que acionou a execução do workflow. O valor será `branch`, `tag` ou `null` (se a referência não estiver completamente formada).
> `github.ref_type` é o valor do tipo de referência que acionou a execução do workflow. Ele só pode conter `branch` ou `tag`; `null` não é um valor válido. Consulte o link do documento nesta pergunta para mais detalhes.
