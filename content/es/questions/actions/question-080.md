---
title: "Pregunta 080"
question: "¿Cuál es la sintaxis correcta para configurar el directorio para todos los comandos `run` en un workflow?"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunworking-directory

1. [x] configurar `working-directory` bajo `defaults.run`
   ```yaml
    defaults:
        run:
            shell: bash
            working-directory: ./scripts
   ```
1. [ ] configurar `directory` bajo `defaults.run`
   ```yaml
    defaults:
        run:
            shell: bash
            directory: ./scripts
   ```
1. [ ] configurar `working-directory` bajo `job`
   ```yaml
    defaults:
        run:
            shell: bash
    job:
        working-directory: ./scripts
   ```
1. [ ] configurar `directory` bajo `job`
   ```yaml
    defaults:
        run:
            shell: bash
    job:
        directory: ./scripts
   ```
