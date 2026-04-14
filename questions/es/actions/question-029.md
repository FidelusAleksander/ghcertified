---
question: "Su flujo de trabajo de análisis de Pull Request utiliza múltiples herramientas de análisis de código y toma aproximadamente 20 minutos para completarse por completo. Se activa en el evento `pull_request` con el filtro `branches` configurado en `master`. Por lo tanto, si un desarrollador envía múltiples commits en unos pocos minutos, varios flujos de trabajo se ejecutan en paralelo. ¿Cómo puede detener todas las ejecuciones anteriores del flujo de trabajo y ejecutar solo la que tiene los cambios más recientes?"
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
> Esto pondrá en cola las ejecuciones en esa referencia de GitHub. No detendrá las ejecuciones anteriores.

- [ ] Usar el filtro de tipos de actividad
```yaml
on:
  pull_request:
    branches:
      - master
    types: [latest]
```
> No existe tal tipo de actividad como `latest` para el evento pull_request.
- [ ] Usar la bandera cancel-in-progress para el evento `pull_request`
```yaml
on:
  pull_request:
    branches:
      - master
    cancel-in-progress: true
```
