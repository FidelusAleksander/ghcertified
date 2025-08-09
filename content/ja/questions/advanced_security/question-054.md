---
title: "質問 054"
question: "GitHubリポジトリでCodeQL解析をスケジュールで実行するにはどうすればよいですか？（2つ選んでください）"
---

> https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning#about-default-setup
- [x] `schedule`トリガーを持つGitHub Actionsワークフローを作成する。ワークフローは`github/codeql-action`リポジトリのActionsを利用する。
- [x] デフォルトのCodeQL解析設定を使用する。
- [ ] リポジトリ設定で`codeql.trigger`プロパティを`schedule`に設定する。
- [ ] `.github/codeql.yml`設定ファイルに`schedule`プロパティを追加する。
- [ ] GitHubサポートにスケジュールCodeQL解析有効化を依頼する。