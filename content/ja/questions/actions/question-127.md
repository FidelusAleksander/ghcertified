---
question: "GitHub Actionsジョブの後続ステップに対して、'API_VERSION' という環境変数に '2.1' を設定する正しいWorkflowコマンド構文はどれですか？"
title: "質問 127"
---

> https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable

1. [x] `echo "API_VERSION=2.1" >> "$GITHUB_ENV"`
1. [ ] `echo "API_VERSION=2.1" >> "$GITHUB_OUTPUT"`
1. [ ] `export API_VERSION=2.1 >> "$GITHUB_ENV"`
1. [ ] `set-env name=API_VERSION value=2.1`