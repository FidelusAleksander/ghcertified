---
question: "Seu repositório público de código aberto contém um fluxo de trabalho com um gatilho de evento `pull_request`. Como você pode exigir aprovações para execuções de fluxos de trabalho acionados a partir de forks do seu repositório?"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks#about-workflow-runs-from-public-forks"
---

- [x] Configurar aprovações obrigatórias para execuções de forks no repositório
- [ ] Configurar regras de proteção de implantação para o repositório
> Regras de proteção de implantação são usadas para proteger ambientes
- [ ] Configurar regras de proteção de branch para o repositório
- [ ] O fluxo de trabalho não será acionado para forks se estiver usando o evento `pull_request`. Se desejar fazer isso, você deve usar o gatilho de evento `fork_pull_request` com a opção `require-approval`.
