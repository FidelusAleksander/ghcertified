---
question: "テストコードに偽の秘密情報を含めたところ、それがGitHubの秘密情報スキャンによって検知されました。これがテストで使用される偽の秘密情報であり、秘密情報スキャンで無視すべきであることをGitHubに伝えるにはどうすればよいですか？"
documentation: "https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/excluding-folders-and-files-from-secret-scanning"
---

- [x] 偽の秘密情報が含まれているパスを宣言するための`secret_scanning.yml`ファイルを作成することで、スキャン時にそれらが省略されます
- [x] Secret Scanning Alertを「Used in tests」のクローズ理由で閉じる
- [ ] テストファイル内で、偽の秘密情報が記載されている行にコメント`#gh_ignore: fake secret`を追加する
- [ ] 偽の秘密情報が含まれているパスを宣言するための`.github/codeql.yml`ファイルを作成することで、スキャン時にそれらが省略されます
