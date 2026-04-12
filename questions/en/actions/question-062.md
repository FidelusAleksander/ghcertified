---
question: "Your organization defines a secret `SomeSecret`, however when you reference that secret in a workflow using `${{ secrets.SomeSecret }}` it provides a different value than expected. What may be the reason for that?"
documentation: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets"
---

- [x] The secret `SomeSecret` is also declared in repository scope
- [ ] The secret `SomeSecret` is also declared in enterprise scope
> If a secret with the same name exists at multiple levels, the secret at the lowest level takes precedence.
- [ ] `${{ secrets.SomeSecret }}` expression is only used for repository scoped secrets
- [ ] You need to use the GitHub API to access organization scoped secrets
