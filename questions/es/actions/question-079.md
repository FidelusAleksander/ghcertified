---
question: "¿En qué commit y en qué branch se ejecutan los workflows programados en GitHub Actions?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule"
---

- [ ] Los workflows programados se ejecutan en el commit específico de la última branch modificada.
> incorrecto, tanto el commit específico como la última branch modificada
- [ ] Los workflows programados se ejecutan en el commit específico de la rama principal.
> incorrecto, tanto el commit específico como la rama principal
- [x] Los workflows programados se ejecutan en el último commit de la rama predeterminada del repositorio.
- [ ] Los workflows programados se ejecutan en el último commit de la rama principal.
> el último commit es correcto, pero la rama principal no lo es
