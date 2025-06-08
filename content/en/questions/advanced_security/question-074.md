---
title: "Question 074"
question: "Which of the following statements about enabling CodeQL scanning default setup are true? (Choose three.)"
---


> https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning
- [x] You can enable default setup for all eligible repositories in an organization at once in the organization settings
- [x] GitHub Actions need to be enabled as a prerequisite
- [x] You can enable default setup on any repository, regardless of the contents of the repository
- [ ] You can only enable default setup on repositories that contain at least one CodeQL-supported language
> If you enable default setup on a repository that does not include any CodeQL-supported languages, default setup will not run any scans
- [ ] Default setup will scan the repository on a schedule that you can configure. For event based scanning, you need to configure a GitHub Action workflow
> Default setup includes scheduled scanning and pull request / push scanning on the default and protected branches
- [ ] You can only use the default query suite with default CodeQL scanning setup
