---
question: "エンタープライズに関連するすべてのDependabotアラートのリストを取得するために使用できるAPIエンドポイントはどれですか？"
documentation: "https://docs.github.com/en/rest/dependabot/alerts?apiVersion=2022-11-28#list-dependabot-alerts-for-an-enterprise"
---

- [x] `GET /enterprises/{enterprise}/dependabot/alerts`
- [ ] `GET /orgs/{org}/dependabot/alerts`
> これは組織のための正しいエンドポイントですが、エンタープライズ用ではありません
- [ ] `GET /repos/{owner}/{repo}/dependabot/alerts`
> これはリポジトリのための正しいエンドポイントですが、エンタープライズ用ではありません
- [ ] `GET /github/{enterprise}/dependabot/alerts`
