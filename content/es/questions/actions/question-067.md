---
question: "¿Cuál es la forma correcta de activar un job solo si la variable de configuración `MY_VAR` tiene el valor de `MY_VALUE`?"
title: "Pregunta 067"
---

> https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context
1. [x] Creando la siguiente condición a nivel del job
```yaml
  my-job:
    if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
1. [ ] Creando la siguiente condición a nivel del job
```yaml
  my-job:
    if: ${{ vars.MY_VAR }} == 'MY_VALUE'
```
> Esto siempre se evaluará como True
1. [ ] No es posible porque las variables de configuración no pueden usarse en condiciones `if`
> Eso es cierto para `secrets`, pero no para las variables de configuración
1. [ ] No es posible porque las variables de configuración no pueden usarse en condiciones `if` a nivel de job
> Eso es cierto para `secrets`, pero no para las variables de configuración
