---
question: "Para ejecutar un `step` solo si el secreto `MY_SECRET` ha sido configurado, puedes:"
title: "Pregunta 068"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-secrets
1. [x] Configurar el secreto `MY_SECRET` como una variable de entorno a nivel de job, y luego referenciar esa variable de entorno para ejecutar condicionalmente ese step.
```yaml
  my-job:
    runs-on: ubuntu-latest
    env:
      my_secret: ${{ secrets.MY_SECRET }}
    steps:
      - if: ${{ env.my_secret != '' }}
```
1. [ ] Creando la siguiente condición a nivel de job:
```yaml
  my-job:
    runs-on: ubuntu-latest
    if: ${{ secrets.MY_SECRET == '' }}
```
> los secretos no se pueden referenciar directamente en condiciones if:
1. [ ] Creando la siguiente condición a nivel de step:
```yaml
  my-job:
    runs-on: ubuntu-latest
    steps:
      - if: ${{ secrets.MY_SECRET == '' }}
```
> los secretos no se pueden referenciar directamente en condiciones if:
1. [ ] Creando la siguiente condición a nivel de step:
```yaml
  my-job:
    runs-on: ubuntu-latest
    steps:
      - if: ${{ secrets.MY_SECRET }}
```
> los secretos no se pueden referenciar directamente en condiciones if:
