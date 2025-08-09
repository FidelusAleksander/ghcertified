---
title: "質問 022"
question: "会社の内部シークレットがGitHubリポジトリに誤ってプッシュされるのを防ぎたいが、そのパターンがGitHubに知られておらずSecret scanningで検出されない。どのように開発者を保護できますか？"
---


> https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization
1. [x] これらのシークレットの正規表現パターンを定義し、組織でSecret scanningのカスタムパターンを有効化する
1. [ ] GitHubパートナープログラムに参加し、シークレットのパターンを認識させるべき
> GitHubパートナープログラムはサービスプロバイダー向けで、組織内部のシークレット用ではない
1. [ ] 組織のリポジトリでカスタムGitHub Actionsワークフローを定義してスキャンする
1. [ ] すべてのリポジトリに`secret_scanning.yml`ファイルを含めてカスタムシークレットを定義する
> `secret_scanning.yml`は特定ファイルやディレクトリのスキャン除外に使われる