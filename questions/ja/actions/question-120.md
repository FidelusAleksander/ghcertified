---
title: "質問 120"
question: "コンテナアクションでクリーンアップスクリプトを指定する正しい構文はどれですか？"
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