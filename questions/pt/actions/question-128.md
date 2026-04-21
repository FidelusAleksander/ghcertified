---
question: "Um workflow é acionado quando pull requests são reabertos. Por que isso pode ser a causa?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request"
---

- [x] `types: [reopened]` está definido no evento `pull_request`. 
- [ ] Regras de proteção de branch foram configuradas incorretamente.
> As regras de proteção de branch não determinam quando um workflow é acionado.
- [x] Nenhum tipo de atividade está definido no evento `pull_request`.
> Se nenhum tipo de atividade for explicitamente definido, o evento `pull_request` será acionado em PRs abertos (`opened`), PRs cujo branch de origem foi atualizado desde que o PR foi aberto (`synchronize`) ou PRs reabertos (`reopened`).
- [ ] `on: schedule` foi configurado com `pull_requests: [reopened]`
> `schedule` é usado para acionar workflows em determinados horários, não em atividades baseadas no repositório.
