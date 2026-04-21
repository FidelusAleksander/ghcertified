---
question: "Su flujo de trabajo de análisis de Pull Request utiliza múltiples herramientas de análisis de código y tarda unos 20 minutos en completarse por completo. Se activa con el evento `pull_request` usando el filtro `branches` configurado en `master`. Por lo tanto, si un desarrollador empuja múltiples commits en pocos minutos, varios flujos de trabajo se ejecutan en paralelo. ¿Cómo puede detener todas las ejecuciones anteriores del flujo de trabajo y ejecutar solo la última con los cambios más recientes?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run"
---

- [x] Usar concurrencia con cancel-in-progress
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
- [ ] Usar concurrencia
```yaml
concurrency:
  group: ${{ github.ref }}
```
> Esto encolaría ejecuciones en esa referencia de github. No detendrá ejecuciones anteriores.

- [ ] Usar filtro de tipos de actividad
```yaml
on:
  pull_request:
    branches:
      - master
    types: [latest]
```
> No existe un tipo de actividad como `latest` para el evento pull_request.
- [ ] Usar la bandera cancel-in-progress para el evento `pull_request`
```yaml
on:
  pull_request:
    branches:
      - master
    cancel-in-progress: true
```
> `cancel-in-progress` solo se puede usar dentro de un bloque de `concurrency`. No es una clave válida para `pull_request`.
