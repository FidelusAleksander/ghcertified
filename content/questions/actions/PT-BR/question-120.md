---
archetype: "questions"
title: "Questão 120"
question: "Qual é a sintaxe correta para especificar um script de limpeza em uma ação de contêiner?"
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
