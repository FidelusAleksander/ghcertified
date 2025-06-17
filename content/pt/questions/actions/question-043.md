---
question: "Se um fluxo de trabalho for executado em uma branch `feature-a`, ele pode restaurar `caches` criados na branch padrão `main`?"
title: "Question 043"
---


> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache
1. [x] Sim, todas as branches podem restaurar caches criados na branch padrão
1. [ ] Sim, todos os caches podem ser acessados por fluxos de trabalho em qualquer branch dentro do mesmo repositório
1. [ ] Não, os caches só podem ser restaurados da mesma branch
1. [ ] Sim, mas apenas se nenhum arquivo tiver sido alterado na branch `feature-a`
