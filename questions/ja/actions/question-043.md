---
question: "`feature-a` ブランチでWorkflowが実行された場合、デフォルトブランチ `main` で作成された `caches` を復元できますか？"
title: "質問 043"
---


> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache
1. [x] はい、すべてのブランチはデフォルトブランチで作成されたcachesを復元できる
1. [ ] はい、同じRepository内のすべてのブランチはすべてのcachesにアクセスできる
1. [ ] いいえ、cachesは同じブランチからのみ復元できる
1. [ ] はい、ただし `feature-a` ブランチでファイルが変更されていない場合に限る