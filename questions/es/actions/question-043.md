---
question: "Si un workflow se ejecuta en una rama `feature-a`, ¿puede restaurar `caches` creados en la rama predeterminada `main`?"
title: "Pregunta 043"
---


> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache
1. [x] Sí, todas las ramas pueden restaurar caches creados en la rama predeterminada
1. [ ] Sí, todos los caches pueden ser accedidos por workflows en cualquier rama dentro del mismo repository
1. [ ] No, los caches solo pueden ser restaurados desde la misma rama
1. [ ] Sí, pero solo si no se cambiaron archivos en la rama `feature-a`
