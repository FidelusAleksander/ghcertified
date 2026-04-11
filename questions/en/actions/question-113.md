---
question: "What is true about the following workflow configuration if triggered against the `octo/my-dev-repo` repository?"
title: "Question 113"
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
- [x] the `production-deploy` job will be marked as skipped
- [ ] the `production-deploy` job will error
- [ ] the `production-deploy` job will execute three steps
- [ ] the `production-deploy` job will run if the `node-version` is `14`
