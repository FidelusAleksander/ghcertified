---
question: "Jenkins CI パイプラインの一環として、CodeQL データベースを作成および分析し、SARIF ファイルを生成しました。SARIF ファイルを GitHub にアップロードするにはどうすればよいですか？"
documentation: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#about-sarif-file-uploads-for-code-scanning"
---

- [x] CodeQL CLI の `codeql github upload-results` コマンドを使用する
- [x] GitHub REST API の `POST /repos/{owner}/{repo}/code-scanning/sarifs` エンドポイントを使用する
- [ ] GitHub CLI の `gh codeql upload-results` コマンドを使用する
- [ ] SARIF ファイルを GitHub リポジトリにコミットする
- [ ] `github/codeql-action/upload-sarif` GitHub Action を使用する
> GitHub Actions は Jenkins パイプラインで使用できません。
