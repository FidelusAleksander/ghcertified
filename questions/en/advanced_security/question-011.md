---
question: "How can you prevent commits containing cloud provider credentials from being pushed to GitHub?"
documentation: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations"
---

- [x] Enable a secret scanning push protection rule for your repository or organization.
- [ ] Include a `.gitignore` file in your repository that will ignore files containing secrets.
- [ ] Create a GitHub Action that will scan your commits for secrets before they are pushed to GitHub.
- [ ] Enable a branch protection rule for your repository.
