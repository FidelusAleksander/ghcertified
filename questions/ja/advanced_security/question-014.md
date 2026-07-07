---
question: "テストコードに偽のシークレットを含めたところ、GitHub のシークレットスキャンによって検出されました。これらがテストで使用される偽のシークレットであり、シークレットスキャンで無視してよいことを GitHub に伝えるにはどうすればよいですか?"
documentation: "https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/exclude-folders-and-files"
---

- [x] 偽のシークレットが存在するパスを宣言した `secret_scanning.yml` ファイルを作成し、スキャンでそれらが除外されるようにする
- [x] Secret Scanning Alert を「テストで使用」によるクローズ理由で閉じる
- [ ] テストファイル内で、偽のシークレットがある行にコメント `#gh_ignore: fake secret` を追加する
- [ ] 偽のシークレットが存在するパスを宣言した `.github/codeql.yml` ファイルを作成し、スキャンでそれらが除外されるようにする
