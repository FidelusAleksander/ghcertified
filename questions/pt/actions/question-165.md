---
question: "Como o `repository_dispatch` permite que sistemas externos ao GitHub acionem um workflow?"
documentation: "https://docs.github.com/en/rest/repos/repos?apiVersion=2026-03-10#create-a-repository-dispatch-event"
---

- [x] O sistema externo faz uma solicitação POST para a API do GitHub para criar um evento de repository dispatch.
- [x] O workflow é acionado pela criação de um evento de repository dispatch 
> O resultado do "Create a repository dispatch event" é um novo evento `repository_dispatch` (webhook), que o `on.repository_dispatch` escuta.
- [x] A chave `on.repository_dispatch.types` do workflow corresponde ao parâmetro `event_type` no payload da solicitação, restringindo o workflow para acionar apenas em eventos externos relevantes 
> `on.repository_dispatch.types` permite que você defina tipos de atividades personalizadas. Consulte a [documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#repository_dispatch) para exemplos de como `on.repository_dispatch.types` e `event_type` se relacionam.
- [ ] O sistema externo faz uma solicitação PUT para a API do GitHub para criar um evento de repository dispatch
> O método HTTP correto para o "Create a repository dispatch event" é POST.
- [ ] O workflow é acionado por uma solicitação POST para o workflow usando o seguinte endpoint `/repos/OWNER/REPO/actions/workflows/<WORKFLOW_ID>/dispatches` 
> Este endpoint corresponde à criação de um evento de workflow dispatch, não de um evento de repository dispatch. Além disso, a API do GitHub é onde as solicitações relacionadas ao Actions devem ser feitas—chamadas de API não podem ser feitas diretamente ao próprio workflow.
- [ ] A chave `on.repository_dispatch.event_types` do workflow corresponde ao parâmetro `event_type` no payload da solicitação, restringindo o workflow para acionar apenas em eventos externos relevantes
> Não existe uma chave `on.repository_dispatch.event_types`. É usada `on.repository_dispatch.types`, de forma consistente com a maneira como outros eventos usam `on.<event_name>.types` para filtrar com base na atividade.
