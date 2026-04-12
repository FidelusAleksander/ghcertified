---
question: "Qual é a sintaxe correta para definir o diretório para todos os comandos `run` em um workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunworking-directory"
---

- [x] definir `working-directory` em `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    working-directory: ./scripts
```
- [ ] definir `directory` em `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    directory: ./scripts
```
- [ ] definir `working-directory` em `job`
```yaml
defaults:
  run:
    shell: bash
job:
  working-directory: ./scripts
```
- [ ] definir `directory` em `job`
```yaml
defaults:
  run:
    shell: bash
job:
  directory: ./scripts
```
