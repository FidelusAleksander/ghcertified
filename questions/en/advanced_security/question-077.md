---
question: "What is the simplest method to execute CodeQL analysis concurrently for each language in a multi-language repository using GitHub Actions?"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed"
---

- [x] By creating a `languages` matrix for the job and then reference it in the `github/codeql-action/init` action's `languages` input parameter
- [ ] By calling the `github/codeql-action/analyze` action in separate sequential steps for each language in the workflow
- [ ] By creating a separate workflow file for each language and triggering them all on the same event
- [ ] Define the parallelism in the `github/codeql-action/analyze` action using the `parallel` input parameter
