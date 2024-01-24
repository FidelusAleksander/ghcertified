---
archetype: "questions"
title: "Question 014"
question: "You have included some fake secrets in your test code and they have been picked up by GitHub's secret scanning. What can you do to tell GitHub that these are fake secrets and can be ignored? (Choose two.)"
draft: false
---


> <br/> [Managing secret scanning alerts](https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning#managing-secret-scanning-alerts) 
> <br/> [Excluding directories from secret scanning alerts](https://docs.github.com/en/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories#excluding-directories-from-secret-scanning-alerts-for-users)
- [x] By creating a `secret_scanning.yml` file within which you declare paths where fake secrets are located, so scans will omit them
- [x] Close the Secret Scanning Alert with `Used in tests` close reason
- [ ] In your test files, add a comment `#gh_ignore: fake secret` on the line where the fake secret is located.
- [ ] By creating a `.github/codeql.yml` file within which you declare paths where fake secrets are located, so scans will omit them
