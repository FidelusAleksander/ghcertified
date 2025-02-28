---
question: "Se um workflow for executado em uma branch `feature-a`, ele pode restaurar `caches` criados na branch padrão `main`?"
archetype: "questions"
title: "Questão 043"
---


> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache
1. [x] Sim, todas as branches podem restaurar caches criados na branch padrão
1. [ ] Sim, todos os caches podem ser acessados por workflows em qualquer branch dentro do mesmo repositório
1. [ ] Não, caches só podem ser restaurados da mesma branch
1. [ ] Sim, mas apenas se nenhum arquivo foi alterado na branch `feature-a`
