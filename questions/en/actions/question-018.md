---
question: "This workflow will run on all pull requests where:"
documentation: "https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#example-including-and-excluding-branches"
---

```yaml
on:
  pull_request:
    branches:
      - 'release/**'
      - '!release/**-alpha'
```
- [x] the target branch name starts with `release` but does not end with `-alpha`
- [ ] the target branch name starts with `release`
- [ ] the source branch name starts with `release` but does not end with `-alpha`
- [ ] the source branch name starts with `release`
