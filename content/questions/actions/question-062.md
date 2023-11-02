---
question: "Your organization defines a secret `SomeSecret`, however when You reference that secret in a workflow using `${{ secrets.SomeSecret }}` it provides a different value than expected. What may be the reason for that?"
archetype: "questions"
title: "Question 062"
draft: false
subject: []
---

> https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets
1. [x] The secret `SomeSecret` is also declared in repository scope
1. [ ] The secret `SomeSecret` is also declared in enterprise scope
> If a secret with the same name exists at multiple levels, the secret at the lowest level takes precedence.
1. [ ] `${{ secrets.SomeSecret }}` expression is only used for repository scoped secrets
1. [ ] You need to use the GitHub API to access organization scoped secrets
