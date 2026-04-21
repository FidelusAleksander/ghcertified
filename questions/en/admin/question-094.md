---
question: "What is required to download or publish a GitHub Package within workflows, such as with GitHub Actions or other CI/CD tools?"
documentation: "https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages"
---

- [x] Use `GITHUB_TOKEN` for publishing packages associated with the workflow repository, and a PAT for installing packages from private repositories.
- [ ] GitHub Packages cannot be used in GitHub Actions workflows or any CI/CD tools due to authentication restrictions that prevent automated access.
- [ ] Only SSH keys are required for using GitHub Packages in workflows; no token-based authentication is needed for package operations.
- [ ] Manual download and upload of packages is required for each workflow run because automated package management is not supported.
