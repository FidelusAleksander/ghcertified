---
title: "Question 034"
date: 2023-08-29T11:51:16+02:00
draft: false
subject: []
---


# For any action published in GitHub Marketplace, You can often use it in multiple versions, rank the different approaches from most to least stable and secure.
> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-versioned-actions
1. Using the commit SHA
```yaml
    uses: actions/checkout@8f4b7f84864484a7bf31766abe9204da3cbe65b3
```
2. Using version tags
```yaml
    uses: actions/checkout@v3
```
3. Using the main branch
```yaml
    uses: actions/checkout@main
```
