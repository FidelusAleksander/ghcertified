---
question: "Ten workflow zostanie uruchomiony dla wszystkich pull requestów, w których:"
documentation: "https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#example-including-and-excluding-branches"
---

```yaml
on:
  pull_request:
    branches:
      - 'release/**'
      - '!release/**-alpha'
```
- [x] nazwa docelowej gałęzi zaczyna się od `release`, ale nie kończy się na `-alpha`
- [ ] nazwa docelowej gałęzi zaczyna się od `release`
- [ ] nazwa źródłowej gałęzi zaczyna się od `release`, ale nie kończy się na `-alpha`
- [ ] nazwa źródłowej gałęzi zaczyna się od `release`
