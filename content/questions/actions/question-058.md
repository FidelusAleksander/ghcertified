---
question: "When using Github Actions to access resources in one of the cloud providers (such as AWS, Azure or GCP) the safest and recommended way to authenticate is"
archetype: "questions"
title: "Question 058"
draft: false
---

> https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect
1. [x] Using OIDC
1. [ ] Using Vault
1. [ ] Storing access keys in `secrets`
> Using long lasting access keys is not recommended in case of any security leaks or attacks such as [script injection](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)
1. [ ] Storing access keys in `variables`
> No sensitive values should be stored in `variables`
