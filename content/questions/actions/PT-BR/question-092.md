---
archetype: "questions"
title: "Questão 092"
question: "Em um workflow do GitHub Actions, como você especifica uma versão específica do Node.js para usar em um job?"
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
  uses: setup-node@v4
  with:
    version: 20
```
1. [ ] 
```yaml
  uses: setup-node@v4
  with:
    node: 20
```
