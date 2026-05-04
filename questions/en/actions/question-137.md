---
question: "How many jobs will run in the following matrix?"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations#expanding-or-adding-matrix-configurations"
---

```yaml
jobs:
  test_deploy:
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        version: [1, 2]
        include:
            - comment-color: "green"
            - error-color: "red"
            - os: "ubuntu-latest"
              comment-color: "blue"
            - os: "macos-latest"
              comment-color: "yellow"
```

- [x] 5
> This matrix produces 5 jobs with the following matrix combinations:
> `os:ubuntu-latest,version:1,comment-color:blue,error-color:red` 
> `os:ubuntu-latest,version:2,comment-color:blue,error-color:red` 
> `os:windows-latest,version:1,comment-color:green,error-color:red` 
> `os:windows-latest,version:2,comment-color:green,error-color:red` 
> `os:macos-latest,comment-color:yellow` 

> 🔥Jobs with `os:ubuntu-latest` get `comment-color: "blue"` since it's not in the original matrix and can be overwritten.

> 🔥All original matrix jobs get `error-color: "red"` added, as it doesn't overwrite existing values and is defined once.

> 🔥The last `include` entry creates a new job `{os:macos-latest, comment-color: "yellow"}` since it overwrites `os`. It lacks `error-color` as it's not in the original matrix, unlike `comment-color` which is included here.
- [ ] 6
- [ ] 7
- [ ] 10