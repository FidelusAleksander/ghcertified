---
question: "GitHub Actionsジョブの後続のステップで、'API_VERSION'という名前の環境変数に値'2.1'を正しく設定するワークフローコマンド構文はどれですか？"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable"
---

- [x] `echo "API_VERSION=2.1" >> "$GITHUB_ENV"`
- [ ] `echo "API_VERSION=2.1" >> "$GITHUB_OUTPUT"`
- [ ] `export API_VERSION=2.1 >> "$GITHUB_ENV"`
- [ ] `set-env name=API_VERSION value=2.1`
