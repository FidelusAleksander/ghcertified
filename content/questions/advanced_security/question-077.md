---
archetype: "questions"
title: "Question 077"
question: "What is the simplest method to execute CodeQL analysis concurrently for each language in a multi-language repository using GitHub Actions? (Choose two.)"
draft: false
---


> https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed
1. [x] By creating a `languages` matrix for the job and then reference it in the `github/codeql-action/init` action's `languages` input parameter
1. [ ] By calling the `github/codeql-action/analyze` action in separate steps for each language
1. [ ] By creating a separate workflow for each language
1. [ ] Define the parallelism in the `github/codeql-action/analyze` action
