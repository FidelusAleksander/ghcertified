---
title: "質問 083"
question: "Jenkins CIパイプラインの一環としてCodeQLデータベースを作成・解析しSARIFファイルを生成しました。SARIFファイルをGitHubにアップロードする方法は？（2つ選んでください）"
---

> https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#about-sarif-file-uploads-for-code-scanning
- [x] CodeQL CLIの`codeql github upload-results`コマンドを使用する
- [x] GitHub REST APIの`POST /repos/{owner}/{repo}/code-scanning/sarifs`エンドポイントを使用する
- [ ] GitHub CLIの`gh codeql upload-results`コマンドを使用する
- [ ] SARIFファイルをGitHubリポジトリにコミットする
- [ ] `github/codeql-action/upload-sarif` GitHubアクションを使用する
> JenkinsパイプラインではGitHub Actionsは使用できない。