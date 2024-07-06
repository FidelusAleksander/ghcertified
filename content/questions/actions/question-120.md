---
archetype: "questions"
title: "Question 120"
question: "What is the correct syntax for specifying a cleanup script in a container action?"
draft: false
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
```yaml
    runs:
      using: 'docker'
      image: 'Dockerfile'
      entrypoint: 'entrypoint.sh'
      after-entrypoint: 'cleanup.sh'
```

1. [ ] 
```yaml
    runs:
      using: 'docker'
      image: 'Dockerfile'
      entrypoint: 'entrypoint.sh'
      cleanup: 'cleanup.sh'
```
