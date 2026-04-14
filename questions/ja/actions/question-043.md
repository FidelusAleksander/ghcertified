---
question: "ワークフローが `feature-a` ブランチで実行される場合、デフォルトの `main` ブランチで作成された `caches` を復元できますか？"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache"
---

- [x] はい、すべてのブランチはデフォルトブランチで作成されたキャッシュを復元できます
- [ ] はい、すべてのキャッシュは同じリポジトリ内の任意のブランチのワークフローによってアクセス可能です
- [ ] いいえ、キャッシュは同じブランチからのみ復元できます
- [ ] はい、ただし `feature-a` ブランチでファイルが変更されていない場合に限ります
