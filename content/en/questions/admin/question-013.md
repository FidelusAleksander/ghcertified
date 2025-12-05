---
question: "What are the steps to enable and enforce SAML SSO for a single organization?"
title: "Question 013"
---

> https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization
1. [x] Navigate to your organization `Settings`, click on `Authentication security`, select `Enable SAML authentication`, configure IdP settings, test SAML configuration, and enforce SAML SSO.
1. [ ] From `Enterprise account settings`, open `Security`, enable SAML SSO and enforce for all organizations; then configure the IdP. (This manages enterprise-wide SSO, not a single org.)
1. [ ] In the organization, go to `Settings` → `Member privileges`, enable `SAML SSO`, add IdP metadata, and enforce without testing. (SAML is configured under `Authentication security`, and testing is required.)
1. [ ] Open the repository’s `Settings`, choose `Security`, enable `SAML SSO`, configure the IdP, and enforce. (SAML SSO is set at the organization level, not per repository.)
