---
title: "Pytanie 120"
question: "Jaka jest poprawna składnia dla określenia skryptu czyszczącego w akcji kontenerowej?"
---


> https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runspost-entrypoint

1. [x] 
```yaml
    runs:
      using: 'docker'
      image: 'Dockerfile'
      entrypoint: 'entrypoint.sh'
      post-entrypoint: 'cleanup.sh'
```

1. [ ] 
```yaml
    runs:
      using: 'docker'
      image: 'Dockerfile'
      entrypoint: 'entrypoint.sh'
      post: 'cleanup.sh'
```

1. [ ] 
```yaml
    runs:
      using: 'docker'
      image: 'Dockerfile'
      entrypoint: 'entrypoint.sh'
      after: 'cleanup.sh'
```

1. [ ]
