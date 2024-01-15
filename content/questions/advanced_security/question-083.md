---
archetype: "questions"
title: "Question 083"
question: "As part of your Jenkins CI pipeline you've successfully created and then analyzed a CodeQL database, therefore producing a SARIF file. How can you upload the SARIF file to GitHub? (Choose two.)"
draft: false
---


> https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#about-sarif-file-uploads-for-code-scanning
- [x] Using the `codeql github upload-results` command from CodeQL CLI
- [x] Using the GitHub REST API `POST /repos/{owner}/{repo}/code-scanning/sarifs` endpoint
- [ ] Using the `gh codeql upload-results` command from GitHub CLI
- [ ] By committing the SARIF file to the GitHub repository
- [ ] Using the `github/codeql-action/upload-sarif` GitHub Action
> You can't use GitHub Actions in Jenkins pipelines.
