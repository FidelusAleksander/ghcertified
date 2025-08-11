---
question: "Job `deploy` で、Job `build` で作成された（アプリケーションを含む）バイナリにアクセスしたい場合はどうしますか？"
title: "質問 047"
---


> https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#comparing-artifacts-and-dependency-caching

1. [x] `build` でバイナリをArtifactsとしてアップロードし、`deploy` でそれをダウンロードする
1. [ ] `deploy` でバイナリをArtifactsとしてアップロードし、`build` でそれをダウンロードする
1. [ ] `build` でバイナリをcacheし、`deploy` でcacheからファイルを読む
1. [ ] `deploy` でバイナリをcacheし、`build` でcacheからファイルを読む