---
question: "How can you configure your GitHub repository to run CodeQL analysis on a schedule?"
documentation: "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning#about-default-setup"
---

- [x] By creating a GitHub Actions workflow with a `schedule` trigger. The workflow should leverage actions from the `github/codeql-action` repository.
- [x] By using the default CodeQL analysis setup.
- [ ] By setting the `codeql.trigger` property in the repository settings to `schedule`.
- [ ] By adding a `schedule` property to the `.github/codeql.yml` configuration file.
- [ ] By raising a request with GitHub support to enable scheduled CodeQL analysis for the repository.
