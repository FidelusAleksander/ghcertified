---
question: "GitHubリポジトリをスケジュールに基づいてCodeQL分析を実行するように設定するにはどうすればよいですか？"
documentation: "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning#about-default-setup"
---

- [x] `schedule`トリガーを使用したGitHub Actionsワークフローを作成します。このワークフローは`github/codeql-action`リポジトリのアクションを利用する必要があります。
- [x] デフォルトのCodeQL分析設定を使用します。
- [ ] リポジトリ設定で`codeql.trigger`プロパティを`schedule`に設定します。
- [ ] `.github/codeql.yml`設定ファイルに`schedule`プロパティを追加します。
- [ ] GitHubサポートにリクエストを送信して、リポジトリのスケジュールされたCodeQL分析を有効にしてもらいます。
