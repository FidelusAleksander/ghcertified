---
archetype: "questions"
title: "Question 062"
question: "What is the effect of adding the paths-ignore keyword to your code scanning GitHub Actions workflow?"
draft: false
---


```yaml
.github/workflows/codeql-analysis.yml

on:
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'

```
> https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#avoiding-unnecessary-scans-of-pull-requests
1. [x] Avoiding unnecessary scans when files that are not relevant to the analysis are changed.
1. [ ] It tells CodeQL to omit all `*.txt` and `*.md` files from the analysis. 
1. [ ] Preventing the CodeQL analysis from running on pull requests that change files with the specified extensions.
1. [ ] Pull request checks will ignore any CodeQL vulnerabilities that are found in `*.txt` and `*.md` files.
