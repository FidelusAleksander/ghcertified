---
archetype: "questions"
title: "Question 016"
question: "What is the behavior when a new secret pattern is added or updated in the GitHub secret scanning partner program?"
draft: false
---


> https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#accessing-secret-scanning-alerts
1. [x] GitHub will run a scan of all historical code content in public repositories with secret scanning enabled
1. [ ] GitHub will only scan for the new pattern in newly pushed commits in repositories with secret scanning enabled. If a secret of that pattern was already present in the repository, it will not be detected.
1. [ ] The GitHub partner has to deal with the historically leaked secrets and GitHub will only scan any new commits for the new pattern
1. [ ] GitHub will create an issue in all repositories with secret scanning enabled so the maintainers can check the repository for any secrets matching the new pattern
