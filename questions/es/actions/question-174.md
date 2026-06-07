---
question: "El siguiente flujo de trabajo llama a flujos de trabajo reutilizables en uno de sus trabajos. El flujo de trabajo reutilizable tiene definidas `permissions` a nivel de flujo de trabajo, como se muestra a continuación. ¿Cuál será el resultado de llamar al flujo de trabajo reutilizable?"
documentation: "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
---

```yaml
# flujo de trabajo que llama
on:
    issues:
        types: [opened]
    
    permissions:
        contents: write

    jobs:
        issue_creator:
            permissions:
                contents: read
            uses: ./.github/workflows/issue-creator.yml

# flujo de trabajo reutilizable (issue-creator.yml)
on:
    workflow_call:

    permissions:
        contents: write

    jobs:
        create_issue:
            runs-on: ubuntu-latest
            steps: 
                env: GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}    
                - run: gh issue create --title "Issue report" --body "Hello!" --repo $GITHUB_REPOSITORY

```
- [x] El flujo de trabajo reutilizable devolverá un error, ya que el trabajo que lo llamó solo tiene permisos de `contents:read`
> En este escenario, se activa el flujo de trabajo que llama, pero su trabajo no se ejecutará. En cambio, se generará un error indicando que el archivo del flujo de trabajo que llama no es válido, ya que el flujo de trabajo reutilizable solicita `contents: write`, pero solo se le permite `contents: read`.
- [ ] El flujo de trabajo reutilizable creará un problema en el repositorio titulado `"Issue Report"`
> Esto ocurriría si el trabajo `issue_creator` tuviera permisos de `contents:write`, que serían heredados por el flujo de trabajo reutilizable.
- [ ] El flujo de trabajo reutilizable no será llamado, ya que los flujos de trabajo reutilizables deben estar en una subcarpeta de `.github/workflows`
> Todos los flujos de trabajo deben estar ubicados en el directorio `.github/workflows`.
- [ ] Tanto el flujo de trabajo que llama como el flujo de trabajo reutilizable no serán llamados, porque `issues` no es un disparador disponible para GitHub Actions. 
> `issues` es un evento disparador estándar, como se indica en la [documentación](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#issues)
