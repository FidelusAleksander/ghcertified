---
question: "Estás escribiendo un flujo de trabajo reutilizable que tiene `branch-name` como una entrada. ¿Cómo puedes ejecutar condicionalmente un paso en ese flujo de trabajo si el nombre de la rama comienza con 'smoke-test'?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#startswith"
---

- [x] Usa el método incorporado `startsWith` en combinación con `jobs.<job_id>.steps[*].if`
```yaml
    if: startsWith(inputs.branch-name, 'smoke-test')
```

- [ ] Usa el método incorporado `startsWith` en combinación con `jobs.<job_id>.steps[*].if`
```yaml
    if: inputs.branch-name.startsWith('smoke-test')
``` 
> No puedes usar encadenamiento de métodos con los métodos incorporados de GitHub Actions. Casi todos los métodos incorporados se escriben en el estilo de `methodName(arg1,arg2,...)` 
- [ ] Usa el filtro `branches` bajo `workflow_call`
```yaml
on:
  workflow_call:
    branches:
        - 'smoke-test/**'
```
> El filtro `branches` no está disponible para el disparador de eventos `workflow_call`. Además, los disparadores de eventos de flujos de trabajo no pueden utilizarse para controlar si un paso se ejecuta o no

- [ ] Usa condicionales en shell en combinación con `jobs.<job_id>.steps[*].if`
```yaml
    if: [[ "${{inputs.branch-name}}" == "smoke-test"* ]]
```
> Solo los contextos y expresiones soportados por GitHub Actions pueden usarse en las condiciones de `jobs.<job_id>.steps[*].if`.
