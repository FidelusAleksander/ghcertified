---
question: "ワークフロー内のすべての`run`コマンドのディレクトリを設定するための正しい構文は何ですか？"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunworking-directory"
---

- [x] `defaults.run`の下に`working-directory`を設定する
```yaml
defaults:
  run:
    shell: bash
    working-directory: ./scripts
```
- [ ] `defaults.run`の下に`directory`を設定する
```yaml
defaults:
  run:
    shell: bash
    directory: ./scripts
```
- [ ] `job`の下に`working-directory`を設定する
```yaml
defaults:
  run:
    shell: bash
job:
  working-directory: ./scripts
```
- [ ] `job`の下に`directory`を設定する
```yaml
defaults:
  run:
    shell: bash
job:
  directory: ./scripts
```
