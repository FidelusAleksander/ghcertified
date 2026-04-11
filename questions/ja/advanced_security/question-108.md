---
title: "質問 108"
question: "低重大度のDependabot alertsを自動で却下するにはどうすればよいですか？"
---

> https://docs.github.com/en/code-security/dependabot/dependabot-auto-triage-rules/about-dependabot-auto-triage-rules
1. [x] Dependabotのauto-triageルールを使う。
1. [ ] `dependabot.yml`の`severity`フィールドをhighに設定する。
1. [ ] 低重大度のアラートを出すすべての依存関係を削除する。
1. [ ] `dependabot.yml`の`dismiss-severity`フィールドをlowに設定する。