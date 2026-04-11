---
title: "質問 119"
question: "action.ymlファイルを見て、そのActionがコンテナーActionかどうかを判断する方法はどれですか？"
---

> https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-docker-container-actions

1. [x] `runs.using` の値が `docker` である
1. [ ] `runs.using` の値が `container` である
1. [ ] `runs.using` の値が `Dockerfile` である
1. [ ] `runs.main` の値が `container` である