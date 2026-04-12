---
question: "How can you use a custom CodeQL configuration file in a GitHub Actions workflow?"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-a-custom-configuration-file"
---

- [x] By explicitly providing the configuration file path in the `config-file` input parameter of the `github/codeql-action/init` action
- [ ] By storing the configuration in `.github/codeql/config-config.yml` file. The `github/codeql-action/init` action will automatically detect the file and use it
- [ ] By uploading that file in the Code Scanning section of the Security tab in the repository
- [ ] By storing the configuration in `.github/workflows/codeql-analysis.yml` file. The `github/codeql-action/init` action will automatically detect the file and use it
