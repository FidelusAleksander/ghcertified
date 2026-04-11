---
title: "質問 055"
question: "組織で、リポジトリの全プルリクエストにCodeQL解析を導入し、さらに毎時実行するようになってからGitHub Actionsの請求が通常より高額になりました。これの最も考えられる原因は何ですか？"
---

> https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning#about-billing-for-code-scanning
1. [x] Code scanningはGitHub Actionsを使用しており、追加利用分が請求されている。
1. [ ] コードスキャン解析で想定以上に多くの問題を検出し、完了まで時間がかかっている。
1. [ ] コードスキャンは日次スケジュールでしか実行できず、追加利用分が請求されている。
1. [ ] コードスキャンとGitHub Actionsの請求には相関関係はなく、別のGitHub Actionsワークフローの利用分が請求されている。