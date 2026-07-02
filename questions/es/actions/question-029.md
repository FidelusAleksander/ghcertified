---
question: "El flujo de trabajo de análisis de tu Pull Request utiliza múltiples herramientas de análisis de código y tarda aproximadamente 20 minutos en completarse por completo. Se activa con el evento `pull_request` con el filtro `branches` configurado en `master`. Por lo tanto, si un desarrollador realiza múltiples commits en unos pocos minutos, se ejecutan múltiples flujos de trabajo en paralelo. ¿Cómo puedes detener todas las ejecuciones previas del flujo de trabajo y ejecutar solo la que contiene los cambios más recientes?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run"
---

- [x] Usa concurrency con cancel-in-progress
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
- [ ] Usa concurrency
```yaml
concurrency:
  group: ${{ github.ref }}
```
> Esto colocaría en cola las ejecuciones en esa referencia de github. No detendrá las ejecuciones previas

- [ ] Usa el filtro de tipos de actividad
```yaml
on:
  pull_request:
    branches:
      - master
    types: [latest]
```
> No existe un tipo de actividad llamado `latest` para el evento pull_request

- [ ] Usa la bandera cancel-in-progress para el evento `pull_request`
```yaml
on:
  pull_request:
    branches:
      - master
    cancel-in-progress: true
```
> `cancel-in-progress` solo puede ser utilizado dentro de un bloque `concurrency`. No es una clave válida para `pull_request`.
