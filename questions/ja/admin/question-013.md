---
question: "シングルオーガニゼーションに対してSAML SSOを有効化し、施行する手順は何ですか？"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization"
---

- [x] 組織の`Settings`に移動し、`Authentication security`をクリックして、`Enable SAML authentication`を選択し、IdP設定を構成し、SAML構成をテストして、SAML SSOを施行します。
- [ ] `Enterprise account settings`で、`Security`を開き、SAML SSOを有効化し、すべての組織に対して施行します。その後、IdPを構成します。(これはエンタープライズ全体のSSOを管理するものであり、単一オーガニゼーションではありません。)
- [ ] 組織内で`Settings` → `Member privileges`に移動し、`SAML SSO`を有効化してIdPメタデータを追加し、テストせずに施行します。(SAMLは`Authentication security`で構成され、テストが必要です。)
- [ ] リポジトリの`Settings`を開き、`Security`を選択して、`SAML SSO`を有効化し、IdPを構成して施行します。(SAML SSOは組織レベルで設定されるものであり、リポジトリごとではありません。)
