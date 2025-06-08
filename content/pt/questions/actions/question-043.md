---
question: "Se um fluxo de trabalho for executado em um branch `feature-a`, ele pode restaurar `caches` criados no branch padrão `main`?"
title: "Pergunta 043"
---


> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache
1. [x] Sim, todos os branches podem restaurar caches criados no branch padrão
1. [ ] Sim, todos os caches podem ser acessados por fluxos de trabalho em qualquer branch dentro do mesmo repositório
1. [ ] Não, os caches só podem ser restaurados do mesmo branch
1. [ ] Sim, mas apenas se nenhum arquivo tiver sido alterado no branch `feature-a`
