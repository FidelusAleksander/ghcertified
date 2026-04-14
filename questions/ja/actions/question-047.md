---
question: "ジョブ `deploy` で、ジョブ `build` で作成されたバイナリ（アプリケーションを含む）にアクセスする場合はどうすればよいですか？"
documentation: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#comparing-artifacts-and-dependency-caching"
---

- [x] `build` でバイナリをアーティファクトとしてアップロードし、`deploy` でそれをダウンロードする
- [ ] `deploy` でバイナリをアーティファクトとしてアップロードし、`build` でそれをダウンロードする
- [ ] `build` でバイナリをキャッシュし、`deploy` でキャッシュからファイルを読み取る
- [ ] `deploy` でバイナリをキャッシュし、`build` でキャッシュからファイルを読み取る

