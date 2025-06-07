---
archetype: "questions"
title: "Question 026"
question: "How does GitHub Dependency graph know what dependencies your project is using? (Choose two.)"
---




> https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#supported-package-ecosystems
- [x] GitHub derives dependencies automatically from manifests and lock files committed to the repository
- [x] Dependencies can be manually added using the Dependency submission API
- [ ] GitHub scans the repository code for import statements of external packages
- [ ] It's required to add a GitHub Actions workflow that uses the official `actions/dependency-graph` GitHub Action to add dependencies to the graph whenever a new commit is pushed to the repository
