---
archetype: "questions"
title: "Question 026"
question: "How does GitHub Dependency graph know which dependencies/packages Your project is using? (Choose two.)"
draft: false
---




> https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#supported-package-ecosystems
- [x] GitHub derives dependencies automatically from manifests and lock files commited to the repository
- [x] You can add dependencies using the Dependency submission API
- [ ] GitHub scans the repository code for import statements of external packages
- [ ] You can add a GitHub Actions workflow using with the official `actions/dependency-graph` GitHub Action to add dependencies to the graph whenever a new commit is pushed to the repository
> There is no such GitHub Action as `actions/dependency-graph`
