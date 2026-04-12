---
question: "What is required for a CI server to upload SARIF results to GitHub?"
documentation: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system#generating-a-token-for-authentication-with-github"
---

- [x] A GitHub App or personal access token with `security_events` write permission.
- [ ] A direct connection to the GitHub Advisory Database.
- [ ] Administrator access to the GitHub repository.
- [ ] A special plugin installed in the CI system.
