---
question: "How can you use 3rd party vaults to manage secrets for GitHub Actions?"
archetype: "questions"
title: "Question 091"
---

> https://docs.github.com/en/actions/security-guides/encrypted-secrets#storing-large-secrets
1. [x] Store secrets in the 3rd party vault and use a decryption step in your workflow to access them, with the decryption key stored as a GitHub Actions secret.
1. [ ] Direct integration with 3rd party vaults is supported natively within GitHub Actions without needing any additional configuration.
1. [ ] Third party vaults should be accessed by embedding their API keys within the workflow files and using the API or CLI of that vendor
1. [ ] GitHub Actions does not support the use of 3rd party vaults for secret management; all secrets must be stored within GitHub.
