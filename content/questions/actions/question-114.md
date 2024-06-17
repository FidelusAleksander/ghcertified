---
question: "How can you access the current values of variables in a matrix within a job in the example below:"
archetype: "questions"
title: "Question 114"
draft: false
---

```yaml
jobs:
    example_matrix:
        strategy:
            matrix:
                version: [10, 12, 14]
                os: [ubuntu-latest, windows-latest]
```
> https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy
1. [x] reference variables through the `matrix` context with syntax like`matrix.version` and `matrix.os`
1. [ ] by using the `matrix.property` syntax
1. [ ] by using the `context` keyword within the job configuration
1. [ ] by accessing the variables directly with the syntax `version` and `os`
