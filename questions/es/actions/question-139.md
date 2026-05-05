---
question: "¿De qué maneras puedes habilitar el registro de diagnóstico del runner?"
documentation: "https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging#enabling-runner-diagnostic-logging"
---

- [x] Configurando un secreto o variable llamado `ACTIONS_RUNNER_DEBUG` en `true`
> Nota: `ACTIONS_RUNNER_DEBUG` puede configurarse como un secreto o variable a nivel de organización o repositorio.
- [x] Volviendo a ejecutar un flujo de trabajo con `Enable debug logging enabled`
- [ ] Añadiendo una carpeta de nivel superior `ACTIONS_RUNNER_DEBUG` al repositorio del flujo de trabajo
- [ ] Añadiendo una subcarpeta `runner-diagnostic-logs` al directorio `_diag` del runner auto-hospedado que se está utilizando
> `runner-diagnostic-logs` es el nombre de la carpeta que GitHub genera cuando `ACTIONS_RUNNER_DEBUG` está habilitado. Para evitar posibles confusiones, no se debe crear una carpeta con este nombre en ningún otro lugar.
- [ ] Renombrando el directorio `_diag` de un runner auto-hospedado a `runner-diagnostic-logs`
> Renombrar el directorio `_diag` nunca debe hacerse ya que esto puede afectar las actividades de registro.
