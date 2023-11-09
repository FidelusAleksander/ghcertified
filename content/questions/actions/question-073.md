---
question: "How many jobs will be executed in the following workflow?"
archetype: "questions"
title: "Question 073"
draft: false
---

```yaml
jobs:
  matrix-job:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        pet: [cat, dog]
        color: [pink, brown]
        include:
          - color: white
            pet: dog
    steps:
      - run: echo "Hello ${{ matrix.color }} ${{ matrix.pet }}"
```
> https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy
1. [x] 5
1. [ ] 4
1. [ ] 6
1. [ ] 7
