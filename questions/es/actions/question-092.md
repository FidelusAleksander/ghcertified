---
question: "En un flujo de trabajo de GitHub Actions, ¿cómo especificas una versión específica de Node.js para usar en un job?"
documentation: "https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs#specifying-the-nodejs-version"
---

- [x] 
```yaml
uses: actions/setup-node@v4
with:
  node-version: 20
```
- [ ] 
```yaml
uses: actions/node-setup@v4
with:
  node-version: 20
```
- [ ] 
```yaml
uses: setup-node@v4
with:
  version: 20
```
- [ ] 
```yaml
uses: setup-node@v4
with:
  node: 20
```
