---
title: "質問 129"  
question: "Organization内でPrivate Repositoryのセキュリティアラートを閲覧および管理できるロールはどれですか？"  
draft: false  
---

> **詳細**: [Roles in an organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)

1. [ ] 外部Collaborator  
  > 外部CollaboratorはRepository固有の権限しか持たず、セキュリティ権限を持つOrganizationメンバーではない。  
1. [ ] Repository Maintainer  
  > Maintainerは一部のRepository設定を管理できるが、Organization全体のセキュリティアラートへのデフォルトアクセスは持たない。  
1. [x] Organization OwnerおよびSecurity Manager  
  > **正解**。Organization OwnerとSecurity Managerは、Private Repositoryを含むセキュリティアラートを閲覧および管理できる。  
1. [ ] Billing Manager