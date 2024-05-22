---
archetype: "questions"
title: "Question 080"
question: "What is the correct syntax for setting the directory for all `run` commands in a workflow?"
draft: false
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunworking-directory

1. [x] set `working-directory` under `defaults.run`
   ```yaml
    defaults:
        run:
            shell: bash
            working-directory: ./scripts
   ```
1. [ ] set `directory` under `defaults.run`
   ```yaml
    defaults:
        run:
            shell: bash
            directory: ./scripts
   ```
1. [ ] set `working-directory` under `job`
   ```yaml
    defaults:
        run:
            shell: bash
    job:
        working-directory: ./scripts
   ```
1. [ ] set `directory` under `job`
   ```yaml
    defaults:
        run:
            shell: bash
    job:
        directory: ./scripts
   ```
