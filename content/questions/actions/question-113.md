---
question: "What is true about the following workflow configuration if triggered against the `octo/my-dev-repo` repository?"
archetype: "questions"
title: "Question 113"
draft: false
---

```yaml
name: deploy-workflow
on: [push]
jobs:
    production-deploy:
        if: github.repository == 'octo/my-prod-repo'
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                  node-version: '14'
            - run: npm install -g bats
```
> https://docs.github.com/en/actions/using-jobs/using-conditions-to-control-job-execution
1. [x] the `production-deploy` job will be marked as skipped
1. [ ] the `production-deploy` job will error
1. [ ] the `production-deploy` job will execute three steps
1. [ ] the `production-deploy` job will run if the `node-version` is `14`
