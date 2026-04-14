---
question: "Seu repositório de código aberto publicamente disponível contém um workflow com um gatilho de evento `pull_request`. Como você pode exigir aprovações para execuções de workflow acionadas a partir de forks do seu repositório?"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks#about-workflow-runs-from-public-forks"
---

- [x] Configurar aprovações obrigatórias para execuções de fork no repositório
- [ ] Configurar regras de proteção de implantação para o repositório  
> As regras de proteção de implantação são usadas para proteger ambientes.
- [ ] Configurar regras de proteção de branch para o repositório
- [ ] O workflow não será acionado para forks se estiver usando o evento `pull_request`. Se você quiser fazer isso, deve usar o gatilho de evento `fork_pull_request` com a flag `require-approval`.
