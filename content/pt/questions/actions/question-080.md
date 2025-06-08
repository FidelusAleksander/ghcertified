---
title: "Pergunta 080"
question: "Qual é a sintaxe correta para definir o diretório para todos os comandos `run` em um workflow?"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunworking-directory

1. [x] definir `working-directory` em `defaults.run`
   ```yaml
    defaults:
        run:
            shell: bash
            working-directory: ./scripts
   ```
1. [ ] definir `directory` em `defaults.run`
   ```yaml
    defaults:
        run:
            shell: bash
            directory: ./scripts
   ```
1. [ ] definir `working-directory` dentro de `job`
   ```yaml
    defaults:
        run:
            shell: bash
    job:
        working-directory: ./scripts
   ```
1. [ ] definir `directory` dentro de `job`
   ```yaml
    defaults:
        run:
            shell: bash
    job:
        directory: ./scripts
   ```
