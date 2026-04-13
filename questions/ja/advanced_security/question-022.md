---
question: "自社には、GitHubリポジトリにプッシュしてはならない内部の機密情報があります。この機密情報のパターンはGitHubによって認識されておらず、したがってSecret scanningでは検出されません。開発者がこれらの機密情報をGitHub Organization内のリポジトリに誤ってプッシュするのを防ぐために、企業は何をすべきでしょうか？"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization"
---

- [x] これらの機密情報の正規表現パターンを定義し、Organization用にカスタムパターンを有効にしてSecret scanningを設定します。
- [ ] 企業はGitHubパートナープログラムに参加し、企業の機密情報パターンが認識されるようにするべきです。
> GitHubパートナープログラムは、組織外で機密情報を配布するサービスプロバイダー（例：クラウドプロバイダー）向けです。単一の組織の内部機密情報には適していません。
- [ ] Organization内のリポジトリに対して、これらの機密情報をスキャンするGitHub Actionsのカスタムワークフローを定義します。
- [ ] すべてのリポジトリに`secret_scanning.yml`ファイルを含め、このカスタム機密情報をスキャンする内容を定義します。
> `secret_scanning.yml`ファイルは、特定のファイルやディレクトリに対してSecret scanningを無効にする場合に使用できます。

