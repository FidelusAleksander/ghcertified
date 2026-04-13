---
question: "組織内のすべてのシークレットスキャンアラートのリストを取得するために使用できるAPIエンドポイントはどれですか？"
documentation: "https://docs.github.com/en/rest/secret-scanning/secret-scanning?apiVersion=2022-11-28#list-secret-scanning-alerts-for-an-organization"
---

- [x] `GET /orgs/{org}/secret-scanning/alerts`
- [ ] `GET /enterprises/{enterprise}/secret-scanning/alerts`
> これはエンタープライズ用の正しいエンドポイントですが、組織用ではありません
- [ ] `GET /repos/{owner}/{repo}/secret-scanning/alerts`
> これはリポジトリ用の正しいエンドポイントですが、組織用ではありません
- [ ] `GET /github/{org}/secret-scanning/alerts`
