---
question: "A job called `job2` is using artifacts created in `job1`. Therefore it's important to make sure `job1` finishes before `job2` starts looking for the artifacts. How should you create that dependency?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds"
---

- [x] create this dependency using the `needs` keyword in `job2`
- [ ] this dependency is created implicitly when using `actions/download-artifact` to download artifact from `job1`
- [ ] create this dependency by defining `job2` after `job1` in the workflow's `.yaml` definition
- [ ] create this dependency using the `concurrency` keyword in `job2`
