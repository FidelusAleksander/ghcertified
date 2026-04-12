---
question: "Se um workflow for executado em um branch `feature-a`, ele pode restaurar `caches` criados no branch padrão `main`?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache"
---

- [x] Sim, todos os branches podem restaurar caches criados no branch padrão
- [ ] Sim, todos os caches podem ser acessados por workflows em qualquer branch dentro do mesmo repositório
- [ ] Não, os caches só podem ser restaurados do mesmo branch
- [ ] Sim, mas somente se nenhum arquivo foi alterado no branch `feature-a`
