---
archetype: "questions"
title: "Question 054"
question: "How can you configure your GitHub repository to run CodeQL analysis on a schedule?"
draft: false
---


> https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning#about-default-setup
1. [x] By creating a GitHub Actions workflow with a `schedule` trigger. The workflow should leverage actions from the `github/codeql-action` repository.
1. [ ] By setting the `codeql.trigger` property in the repository settings to `schedule`.
1. [ ] By adding a `schedule` property to the `.github/codeql.yml` configuration file.
1. [ ] By raising a request with GitHub support to enable scheduled CodeQL analysis for the repository.
