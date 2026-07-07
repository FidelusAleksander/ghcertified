---
question: "What is the simplest method to execute CodeQL analysis concurrently for each language in a multi-language repository using GitHub Actions?"
documentation: "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#changing-the-languages-that-are-analyzed"
---

- [x] By creating a `languages` matrix for the job and then reference it in the `github/codeql-action/init` action's `languages` input parameter
- [ ] By calling the `github/codeql-action/analyze` action in separate steps for each language
- [ ] By creating a separate workflow for each language
- [ ] Define the parallelism in the `github/codeql-action/analyze` action
