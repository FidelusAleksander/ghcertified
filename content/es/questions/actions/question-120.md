---
title: "Pregunta 120"
question: "¿Cuál es la sintaxis correcta para especificar un script de limpieza en una acción de contenedor?"
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
