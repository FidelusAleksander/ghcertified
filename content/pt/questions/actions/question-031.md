```yaml
  jobs:
    production-deploy:  
      if: github.repository == 'my-org/my-repo'
      runs-on: ubuntu-latest
      steps:
        ...

  jobs:
    production-deploy:  
      if: ${{ github.repository == 'my-org/my-repo' }}
      runs-on: ubuntu-latest
      steps:
        ...
```
