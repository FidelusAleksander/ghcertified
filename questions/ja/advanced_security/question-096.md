---
title: "質問 096"
question: "企業のすべてのDependabotアラートを取得するために使用できるAPIエンドポイントはどれですか？"
---

> https://docs.github.com/en/rest/dependabot/alerts?apiVersion=2022-11-28#list-dependabot-alerts-for-an-enterprise
1. [x] `GET /enterprises/{enterprise}/dependabot/alerts`
1. [ ] `GET /orgs/{org}/dependabot/alerts`
> これは組織用の正しいエンドポイントですが、企業用ではありません
1. [ ] `GET /repos/{owner}/{repo}/dependabot/alerts`
> これはリポジトリ用の正しいエンドポイントですが、企業用ではありません
1. [ ] `GET /github/{enterprise}/dependabot/alerts`