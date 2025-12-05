---
question: "How can you use 3rd party vaults to manage secrets for GitHub Actions?"
title: "Question 091"
---

> https://developer.hashicorp.com/vault/docs/platform/github-actions
> https://bitwarden.com/help/github-actions-integration/
> https://docs.keeper.io/en/keeperpam/secrets-manager/integrations/github-actions
1. [x] Store secrets in the 3rd party vault and authenticate from your workflow (via the vendor action/CLI) using access credentials stored as GitHub Actions secrets to retrieve them at runtime.
1. [ ] Direct integration with 3rd party vaults is supported natively within GitHub Actions without needing any additional configuration.
1. [ ] Third party vaults should be accessed by embedding their API keys within the workflow files and using the API or CLI of that vendor
1. [ ] GitHub Actions does not support the use of 3rd party vaults for secret management; all secrets must be stored within GitHub.
