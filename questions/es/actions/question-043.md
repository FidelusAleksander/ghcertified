---
question: "Si un flujo de trabajo se ejecuta en una rama `feature-a`, ¿puede restaurar `caches` creados en la rama predeterminada `main`?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache"
---

- [x] Sí, todas las ramas pueden restaurar caches creados en la rama predeterminada
- [ ] Sí, todos los caches pueden ser accedidos por flujos de trabajo en cualquier rama dentro del mismo repositorio
- [ ] No, los caches solo pueden ser restaurados desde la misma rama
- [ ] Sí, pero solo si no se cambiaron archivos en la rama `feature-a`
