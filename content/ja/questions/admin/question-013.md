---
question: "単一の組織に対してSAML SSOを有効化し、適用する手順は何ですか？"
title: "質問 013"
---

> https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization
1. [x] 組織の`Settings`に移動し、`Authentication security`をクリックして、`Enable SAML authentication`を選択し、IdP設定を構成、SAML設定をテストし、SAML SSOを適用します。
1. [ ] `Enterprise account settings`から、`Security`を開き、SAML SSOを有効化し、すべての組織に適用し、その後IdPを構成します。（これはエンタープライズ全体のSSOを管理するものであり、単一組織ではありません。）
1. [ ] 組織内で、`Settings` → `Member privileges`に進み、`SAML SSO`を有効化し、IdPメタデータを追加し、テストせずに適用します。（SAMLは`Authentication security`で構成されており、テストが必要です。）
1. [ ] リポジトリの`Settings`を開き、`Security`を選択し、`SAML SSO`を有効化し、IdPを構成し、適用します。（SAML SSOはリポジトリごとではなく、組織レベルで設定されます。）
