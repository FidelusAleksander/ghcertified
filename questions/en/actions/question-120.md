---
question: "What is the correct syntax for specifying a cleanup script in a container action?"
documentation: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runspost-entrypoint"
---

- [x] 
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  entrypoint: 'entrypoint.sh'
  post-entrypoint: 'cleanup.sh'
```

- [ ] 
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  entrypoint: 'entrypoint.sh'
  post: 'cleanup.sh'
```

- [ ] 
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  entrypoint: 'entrypoint.sh'
  after: 'cleanup.sh'
```

- [ ] 
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  entrypoint: 'entrypoint.sh'
  after-entrypoint: 'cleanup.sh'
```

- [ ] 
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  entrypoint: 'entrypoint.sh'
  cleanup: 'cleanup.sh'
```
