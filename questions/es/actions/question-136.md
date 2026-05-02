---
question: "Tienes un flujo de trabajo que utiliza la matriz a continuación. Si un trabajo en la matriz falla, ¿cómo puedes asegurarte de que otros trabajos en progreso y en cola en la matriz no se cancelen?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idstrategyfail-fast"
---

```yaml
jobs:
  deploy:
    strategy:
      matrix:
        version: ["1", "1.2", "1.3"]
        os: [ubuntu-latest, windows-latest]
```

- [x] Configurar `jobs.<job_id>.strategy.fail-fast` a `false`
> `jobs.<job_id>.strategy.fail-fast` está configurado en `true` de forma predeterminada, lo que significa que si un trabajo de matriz falla, otros trabajos de matriz en progreso y en cola se cancelarán. Debes configurar explícitamente `fail-fast` a `false` para evitar este comportamiento.
- [ ] No es necesario hacer nada, ya que `jobs.<job_id>.strategy.fail-fast` tiene un valor predeterminado de `false`
> `jobs.<job_id>.strategy.fail-fast` está configurado en `true` de forma predeterminada.
- [ ] Configurar `jobs.<job_id>.strategy.matrix.fail-fast` a `false`
> Esto es incorrecto, `fail-fast` está a nivel de `strategy`, no a nivel de `matrix`. Si configuras `fail-fast` a nivel de `matrix`, funcionaría como parte de la [configuración del trabajo](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations#adding-a-matrix-strategy-to-your-workflow-job) y no afectaría la cancelación/continuación de otros trabajos de la matriz.
- [ ] No es necesario hacer nada, ya que `jobs.<job_id>.strategy.matrix.fail-fast` tiene un valor predeterminado de `false`
> Esto es incorrecto, `fail-fast` está a nivel de `strategy`, no a nivel de `matrix`. 
- [ ] No hay forma de aplicar este comportamiento, no se puede evitar.
