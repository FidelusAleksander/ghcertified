---
title: "質問 097"
question: "組織のすべてのSecret scanningアラートを取得するために使用できるAPIエンドポイントはどれですか？"
---

> https://docs.github.com/en/rest/secret-scanning/secret-scanning?apiVersion=2022-11-28#list-secret-scanning-alerts-for-an-organization
1. [x] `GET /orgs/{org}/secret-scanning/alerts`
1. [ ] `GET /enterprises/{enterprise}/secret-scanning/alerts`
> これは企業用の正しいエンドポイントですが、組織用ではありません
1. [ ] `GET /repos/{owner}/{repo}/secret-scanning/alerts`
> これはリポジトリ用の正しいエンドポイントですが、組織用ではありません
1. [ ] `GET /github/{org}/secret-scanning/alerts`