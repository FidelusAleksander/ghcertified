---
question: "GitHub Actions Workflowを平日のみ実行するようスケジュールするにはどうしますか？"
title: "質問 098"
---

> https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule
1. [ ] 平日用の条件をWorkflow YAMLに追加する
1. [ ] GitHub Actionsでは不可能
1. [ ] on: schedule: weekdays イベントトリガーを使用する
1. [x] on: schedule: cron イベントトリガーを使用する