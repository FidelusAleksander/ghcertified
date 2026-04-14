---
question: "En GitHub Actions, si defines tanto un filtro de ramas como un filtro de rutas, ¿cuál es el efecto en la ejecución del workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore"
---

- [x] el workflow solo se ejecutará cuando se cumplan tanto las condiciones de `branches` como de `paths`
- [ ] el workflow se ejecutará cuando se cumpla cualquiera de las condiciones `branches` o `paths`, pero solo aplicará el filtro correspondiente
- [ ] el workflow se ejecutará cuando se cumpla cualquiera de las condiciones `branches` o `paths`
- [ ] el workflow no se ejecutará cuando se cumplan tanto las condiciones de `branches` como de `paths`
