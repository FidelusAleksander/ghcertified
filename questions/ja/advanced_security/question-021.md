---
title: "質問 021"
question: "複数のパブリックリポジトリに貢献しているが、それらにSecret scanningのプッシュ保護が有効でない場合、誤ってシークレットをプッシュしないようにするためには？"
---


> https://docs.github.com/en/code-security/secret-scanning/push-protection-for-users#about-push-protection-for-users
1. [x] 個人のGitHubアカウント設定で「Push protection for yourself」を有効にする
1. [ ] GitHubプッシュ保護のWebプラグインをダウンロードする
1. [ ] リポジトリ、組織、またはエンタープライズレベルでプッシュ保護を有効にしなければならないため不可能
1. [ ] すべてのリポジトリでシークレットを含むファイルを`.gitignore`に追加する