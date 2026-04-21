---
question: "`GITHUB_TOKEN` puede usarse para clonar cualquier repositorio."
documentation: "https://docs.github.com/en/actions/concepts/security/github_token#about-the-github_token"
---

- [ ] Verdadero
- [ ] Solo con permisos elevados
- [x] Falso
> Los permisos de `GITHUB_TOKEN` están limitados al repositorio que contiene el flujo de trabajo que se activó.  
> Para clonar otro repositorio, deben usarse otros métodos de token, como un token de acceso personal (PAT) o un token de acceso de instalación.
