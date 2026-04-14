---
question: "Se um fluxo de trabalho for executado no branch `feature-a`, ele pode restaurar os `caches` criados no branch padrão `main`?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache"
---

- [x] Sim, todos os branches podem restaurar caches criados no branch padrão
- [ ] Sim, todos os caches podem ser acessados por fluxos de trabalho em qualquer branch dentro do mesmo repositório
- [ ] Não, os caches só podem ser restaurados do mesmo branch
- [ ] Sim, mas apenas se nenhum arquivo foi alterado no branch `feature-a`
