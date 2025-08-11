---
title: "質問 080"
question: "ワークフロー内のすべての `run` コマンドでディレクトリを設定する正しい構文はどれですか？"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunworking-directory

1. [x] `defaults.run` の下に `working-directory` を設定する
   ```yaml
    defaults:
        run:
            shell: bash
            working-directory: ./scripts
   ```
1. [ ] `defaults.run` の下に `directory` を設定する
   ```yaml
    defaults:
        run:
            shell: bash
            directory: ./scripts
   ```
1. [ ] `job` の下に `working-directory` を設定する
   ```yaml
    defaults:
        run:
            shell: bash
    job:
        working-directory: ./scripts
   ```
1. [ ] `job` の下に `directory` を設定する
   ```yaml
    defaults:
        run:
            shell: bash
    job:
        directory: ./scripts
   ```