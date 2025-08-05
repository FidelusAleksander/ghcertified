---
question: "Ten workflow uruchomi się dla wszystkich pull requestów, gdzie:"
title: "Pytanie 018"
---

```yaml
on:
  pull_request:
    branches:
      - 'release/**'
      - '!release/**-alpha'
```
> https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#example-including-and-excluding-branches
1. [x] nazwa docelowej gałęzi zaczyna się od `release`, ale nie kończy się na `-alpha`
1. [ ] nazwa docelowej gałęzi zaczyna się od `release`
1. [ ] nazwa źródłowej gałęzi zaczyna się od `release`, ale nie kończy się na `-alpha`
1. [ ] nazwa źródłowej gałęzi zaczyna się od `release`
