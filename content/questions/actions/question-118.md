---
question: "How can you skip the following workflow run when you commit or create a PR?"
archetype: "questions"
title: "Question 118"
draft: false
---

```yaml
name: Build
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    name: Extract artifact version
...
```

>https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs

1. [x] By including any one of the following keywords in the commit message or in the title of the pull-request
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

1. [ ] Provide `SKIP_WORKFLOW` in the commit message
1. [ ] The above workflow will run in every event of push or pull request in every case
