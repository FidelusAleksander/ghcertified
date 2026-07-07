---
question: "GitHubリポジトリを構成して、スケジュールでCodeQL分析を実行するにはどうすればよいですか？"
documentation: "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning#about-default-setup"
---

- [x] `schedule`トリガーを使用したGitHub Actions workflowを作成します。このworkflowでは、`github/codeql-action`リポジトリのアクションを利用する必要があります。
- [x] デフォルトのCodeQL分析設定を使用します。
- [ ] リポジトリ設定で`codeql.trigger`プロパティを`schedule`に設定します。
- [ ] `.github/codeql.yml`構成ファイルに`schedule`プロパティを追加します。
- [ ] リポジトリのスケジュールされたCodeQL分析を有効にするリクエストをGitHubサポートに送信します。
