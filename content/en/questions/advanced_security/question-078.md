---
title: "Question 078"
question: "How can you use a custom CodeQL configuration file in a GitHub Actions workflow?"
---


> https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-a-custom-configuration-file
1. [x] By explicitly providing the configuration file path in the `config-file` input parameter of the `github/codeql-action/init` action
1. [ ] By storing the configuration in `.github/codeql/config-config.yml` file. The `github/codeql-action/init` action will automatically detect the file and use it
1. [ ] By specifying the configuration path in the repository settings under Code security and analysis
1. [ ] By storing the configuration in `.github/workflows/codeql-analysis.yml` file. The `github/codeql-action/init` action will automatically detect the file and use it
