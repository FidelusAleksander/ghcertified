---
title: "質問 014"
question: "テストコードに偽のシークレットを含めていて、GitHubのSecret scanningで検出されました。これらはテスト用の偽シークレットで無視して良いことをGitHubに伝えるにはどうすれば良いですか？（2つ選択）"
---


> https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/excluding-folders-and-files-from-secret-scanning
- [x] 偽シークレットを含むパスを宣言した`secret_scanning.yml`ファイルを作成してスキャン対象から除外する
- [x] Secret Scanning Alertを「Used in tests」（テストで使用）クローズ理由で閉じる
- [ ] テストファイルの偽シークレットがある行に`#gh_ignore: fake secret`コメントを追加する
- [ ] 偽シークレットを含むパスを宣言した`.github/codeql.yml`ファイルを作成してスキャン対象から除外する