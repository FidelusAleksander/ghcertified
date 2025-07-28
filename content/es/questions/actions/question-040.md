---
question: "En el siguiente ejemplo, `workflow A` pasa todos sus secretos a `workflow B`, utilizando la palabra clave inherit. Luego `workflow B` llama a `workflow C`. ¿Cuál de las siguientes afirmaciones sobre los `secrets` es verdadera para ese ejemplo?"
title: "Pregunta 040"
---


```yaml
  jobs:
    workflowA-calls-workflowB:
      uses: octo-org/example-repo/.github/workflows/B.yml@main
      secrets: inherit
```

```yaml
  jobs:
    workflowB-calls-workflowC:
      uses: different-org/example-repo/.github/workflows/C.yml@main
```
> https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-nested-workflows
1. [x] Todos los secretos disponibles para `workflow A` también estarán disponibles para `workflow B`, pero no para `workflow C`.
1. [ ] Todos los secretos de la organización `octo-org` y del repositorio `octo-org/example-repo` estarán disponibles para `workflow B`, pero no para `workflow C`.
> No todos los secretos de la organización `octo-org` tienen que estar disponibles para `octo-org/example-repo`.
1. [ ] Todos los secretos disponibles para `workflow A` también estarán disponibles para `workflow B` y `workflow C`.
> `Workflow B` necesitaría agregar `secrets: inherit` al llamar a `workflow C`.
1. [ ] Sólo los secretos de repositorio y entorno disponibles para `workflow A` estarán disponibles para `workflow B`, pero no para `workflow C`. Los secretos de alcance organizacional no se pueden heredar.
