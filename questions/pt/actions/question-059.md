---
question: "O seu repositório de código aberto e publicamente disponível contém um fluxo de trabalho com um gatilho de evento `pull_request`. Como você pode exigir aprovações para execuções de fluxos de trabalho acionados a partir de forks do seu repositório?"
title: "Pergunta 059"
---

> https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks#about-workflow-runs-from-public-forks
1. [x] Configurar aprovações obrigatórias para execuções de forks no repositório
1. [ ] Configurar regras de proteção de implantação para o repositório  
> As regras de proteção de implantação são usadas para proteger ambientes
1. [ ] Configurar regras de proteção de branch para o repositório
1. [ ] O fluxo de trabalho não será acionado para forks se estiver usando o evento `pull_request`. Se você quiser fazer isso, deve usar o gatilho de evento `fork_pull_request` com o flag `require-approval`.
