---
question: "Seu repositório público de código aberto contém um workflow com um gatilho de evento `pull_request`. Como você pode exigir aprovações para execuções de workflow acionadas a partir de forks do seu repositório?"
title: "Pergunta 059"
---

> https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks#about-workflow-runs-from-public-forks
1. [x] Configurar aprovações obrigatórias para execuções de forks no repositório
1. [ ] Configurar regras de proteção de implantação para o repositório  
> Regras de proteção de implantação são usadas para proteger ambientes.
1. [ ] Configurar regras de proteção de branch para o repositório  
1. [ ] O workflow não será acionado para forks ao usar o evento `pull_request`. Se você deseja fazer isso, deve usar o gatilho de evento `fork_pull_request` com a flag `require-approval`.  
