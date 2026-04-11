---
title: "Pytanie 080"
question: "Jaka jest poprawna składnia ustawiania katalogu dla wszystkich poleceń `run` w workflow?"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunworking-directory

1. [x] ustaw `working-directory` w sekcji `defaults.run`
   ```yaml
    defaults:
        run:
            shell: bash
            working-directory: ./scripts
   ```
1. [ ] ustaw `directory` w sekcji `defaults.run`
   ```yaml
    defaults:
        run:
            shell: bash
            directory: ./scripts
   ```
1. [ ] ustaw `working-directory` w sekcji `job`
   ```yaml
    defaults:
        run:
            shell: bash
    job:
        working-directory: ./scripts
   ```
1. [ ] ustaw `directory` w sekcji `job`
   ```yaml
    defaults:
        run:
            shell: bash
    job:
        directory: ./scripts
   ```
