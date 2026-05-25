---
question: "How do workflows integrate with OIDC after a trust relationship has been established?"
documentation: "https://docs.github.com/en/actions/concepts/security/openid-connect#how-oidc-integrates-with-github-actions"
---

- [x] A workflow job requests an OIDC token from GitHub's OIDC provider. The OIDC token is then validated by the cloud provider, which then provides a cloud-access token so the workflow can access cloud resources.
- [ ] A workflow job requests an cloud access token from GitHub's cloud access provider. The token is then validated by the cloud provider, which then provides a OIDC token so the workflow can access cloud resources.
> OIDC tokens are requested first, then a cloud access token is generated. OIDC tokens cannot access cloud resources.
- [ ] The `on: OIDC_request` event trigger requests a cloud access token from GitHub's cloud access provider. The token is then validated by the cloud provider, which allows the workflow access to cloud resources.
> There is no `on: OIDC_request` event trigger.
- [ ] The `on: OIDC_request` event trigger requests an OIDC token from GitHub's OIDC provider. The token is then validated by the cloud provider, which allows the workflow access to cloud resources.
> There is no `on: OIDC_request` event trigger.
- [ ] After adding a workflow to the "OIDC-allowed workflows" list in the repository settings, workflows will automatically create OIDC and cloud access tokens on their own behalf. These tokens can then be used immediately in the workflow to interface with cloud providers
> There is no "OIDC-allowed workflows" setting.  