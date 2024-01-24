---
archetype: "questions"
title: "Question 011"
question: "How can you prevent commits containing cloud provider credentials from being pushed to GitHub?"
draft: false
---


> https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations
1. [x] Enable a secret scanning push protection rule for your repository or organization.
1. [ ] Include a `.gitignore` file in your repository that will ignore files containing secrets.
1. [ ] Create a GitHub Action that will scan your commits for secrets before they are pushed to GitHub.
1. [ ] Enable a branch protection rule for your repository.
