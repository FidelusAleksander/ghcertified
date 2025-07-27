---
title: "Pregunta 092"
question: "En un workflow de GitHub Actions, ¿cómo especificas una versión específica de Node.js para usar en un job?"
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
