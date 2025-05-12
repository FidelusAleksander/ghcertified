---
question: "Given the following configuration, how many jobs will GitHub Actions run when this matrix is evaluated?"
archetype: "questions"
title: "Question 124"
---

```yaml
strategy:
  matrix:
    os: [ubuntu-latest, windows-latest]
    node: [14, 16]
    include:
      - os: macos-latest
        node: 18
      - os: ubuntu-latest
        node: 14
```

> https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow#expanding-or-adding-matrix-configurations

1. [ ] 4 jobs
1. [x] 5 jobs
1. [ ] 6 jobs
1. [ ] 7 jobs
1. [ ] No jobs will run because the syntax is invalid.
