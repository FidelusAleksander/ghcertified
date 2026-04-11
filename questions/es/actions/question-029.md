---
question: "Su flujo de trabajo de análisis de Pull Request utiliza múltiples herramientas de análisis de código y demora aproximadamente 20 minutos en completarse completamente. Se activa con el evento `pull_request` con el filtro `branches` configurado en `master`. Por lo tanto, si un desarrollador realiza múltiples commits en pocos minutos, se ejecutan múltiples flujos de trabajo en paralelo. ¿Cómo puede detener todas las ejecuciones de flujo de trabajo anteriores y ejecutar solo la que contiene los últimos cambios?"
title: "Pregunta 029"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run

1. [x] Usar concurrency con cancel-in-progress
```yaml
  concurrency:
    group: ${{ github.workflow }}-${{ github.ref }}
    cancel-in-progress: true
```
1. [ ] Usar concurrency
```yaml
  concurrency:
    group: ${{ github.ref }}
```
> Esto colocaría en cola las ejecuciones en esa referencia de GitHub. No detendrá ejecuciones anteriores.

1. [ ] Usar filtro de tipos de actividad
```yaml
  on:
    pull_request:
      branches:
        - master
      types: [latest]
```
> No existe un tipo de actividad denominado `latest` para el evento pull_request.

1. [ ] Usar la bandera cancel-in-progress para el evento `pull_request`
```yaml
  on:
    pull_request:
      branches:
        - master
      cancel-in-progress: true
```
