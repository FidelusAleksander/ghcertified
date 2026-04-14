---
question: "GitHub Actions ワークフロー内で、ジョブに使用する Node.js の特定のバージョンを指定するにはどうすればよいですか？"
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
