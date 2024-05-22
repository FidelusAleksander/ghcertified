---
archetype: "questions"
title: "Question 092"
question: "In a GitHub Actions workflow, how do you specify a specific version of Node.js to use in a job?"
draft: false
---


> https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs#specifying-the-nodejs-version
1. [x] 
```yaml
  uses: actions/setup-node@v4
  with:
    node-version: 20
```
1. [ ] 
```yaml
  uses: actions/node-setup@v4
  with:
    node-version: 20
```
1. [ ] 
```yaml
  uses: setup-node@v4 with version
```
1. [ ] 
```yaml
  uses: setup-node@v4
  with:
    node: 20
```
