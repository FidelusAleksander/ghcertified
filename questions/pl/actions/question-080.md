---
question: "Jaka jest poprawna składnia ustawiania katalogu dla wszystkich poleceń `run` w workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunworking-directory"
---

- [x] ustaw `working-directory` w sekcji `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    working-directory: ./scripts
```
- [ ] ustaw `directory` w sekcji `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    directory: ./scripts
```
- [ ] ustaw `working-directory` w sekcji `job`
```yaml
defaults:
  run:
    shell: bash
job:
  working-directory: ./scripts
```
- [ ] ustaw `directory` w sekcji `job`
```yaml
defaults:
  run:
    shell: bash
job:
  directory: ./scripts
```
