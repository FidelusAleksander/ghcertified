---
question: "How can you use 3rd party vaults to manage secrets for GitHub Actions?"
title: "Question 091"
---

> https://developer.hashicorp.com/vault/docs/platform/github-actions
> https://bitwarden.com/help/github-actions-integration/
> https://docs.keeper.io/en/keeperpam/secrets-manager/integrations/github-actions
1. [x] Store secrets in the 3rd party vault and use a decryption step in your workflow to access them, with the decryption key stored as a GitHub Actions secret.
1. [ ] Direct integration with 3rd party vaults is supported natively within GitHub Actions without needing any additional configuration.
1. [ ] Use environment variables to pass vault credentials directly in the workflow YAML file.
1. [ ] GitHub Actions does not support the use of 3rd party vaults for secret management; all secrets must be stored within GitHub.
