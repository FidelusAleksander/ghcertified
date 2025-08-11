---
title: "質問 058"
question: "GitHub ActionsをCIシステムとして使用し、かつサードパーティツールでコードスキャンを行う場合、SARIF結果をGitHubにアップロードするにはどうすればよいですか？"
---

> https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#uploading-a-code-scanning-analysis-with-github-actions
1. [x] `github/codeql-action/upload-sarif` GitHub Actionを使用してSARIF結果をアップロードする
1. [ ] GitHub Actionsを使うとSARIF結果は自動的にGitHubにアップロードされる
1. [ ] GitHub Actionsでコードスキャンを行う場合、CodeQLのみが使える。サードパーティのコードスキャンツールはサポートされない
1. [ ] `actions/upload-artifact` GitHub Actionを使用してSARIF結果をアップロードする