---
question: "Se um workflow executa na branch `feature-a`, ele pode restaurar `caches` criados na branch padrão `main`?"
title: "Pergunta 043"
---


> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache
1. [x] Sim, todas as branches podem restaurar caches criados na branch padrão
1. [ ] Sim, todos os caches podem ser acessados por workflows em qualquer branch dentro do mesmo repositório
1. [ ] Não, os caches só podem ser restaurados a partir da mesma branch
1. [ ] Sim, mas somente se nenhum arquivo foi alterado na branch `feature-a`
