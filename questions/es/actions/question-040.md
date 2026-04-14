---
question: "En el siguiente ejemplo, `workflow A` pasa todos sus secretos a `workflow B`, utilizando la palabra clave inherit. Luego, `workflow B` llama a `workflow C`. ¿Qué afirmación sobre los `secrets` es verdadera para ese ejemplo?"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-nested-workflows"
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
- [x] Todos los secretos disponibles para `workflow A` también estarán disponibles para `workflow B`, pero no para `workflow C`.
- [ ] Todos los secretos de la organización `octo-org` y del repositorio `octo-org/example-repo` estarán disponibles para `workflow B`, pero no para `workflow C`.
> No todos los secretos de la organización `octo-org` tienen que estar disponibles para `octo-org/example-repo`.
- [ ] Todos los secretos disponibles para `workflow A` también estarán disponibles para `workflow B` y `workflow C`.
> `Workflow B` tendría que agregar `secrets: inherit` al llamar a `workflow C`.
- [ ] Solo los secretos de repositorio y de entorno disponibles para `workflow A` estarán disponibles para `workflow B`, pero no para `workflow C`. Los secretos con alcance de organización no pueden heredarse.
