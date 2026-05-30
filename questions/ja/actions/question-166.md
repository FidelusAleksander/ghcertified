---
question: "JavaScript アクションと `actions/github-script` の両方は JavaScript を使用しますが、独自の JavaScript アクションを作成するのではなく、なぜ `actions/github-script` を使用する必要があるのでしょうか？"
documentation: "https://github.com/actions/github-script"
---

- [x] `actions/github-script` は短いインラインスクリプトに使用すべきです
- [x] `actions/github-script` は、GitHub API と対話するために事前に認証されたクライアントを使用したい場合に使用すべきです
- [x] JavaScript アクションは、リポジトリ間で再利用可能なカスタムアクションを使用したい場合に使用すべきです
- [ ] JavaScript アクションは短いインラインスクリプトに使用すべきです
- [ ] `actions/github-script` は、複数の特定の依存関係を持つ細かく調整された Node.js 環境を利用する必要がある場合に使用すべきです
> `actions/github-script` を呼び出す前に使用するモジュールをインストールすることはできますが、複数の依存関係が必要な場合、ワークフロー内で複数のステップが必要になります。また、`actions/github-script` では Node.js のバージョンを変更することはできず、定義されたバージョンに限定されます。
- [ ] JavaScript アクションは GitHub API 呼び出しを低コストで行うソリューションを使用したい場合に使用すべきです
> JavaScript アクションは低コストではありません。`action.yml` ファイルの作成が必要であり、これを独自のフォルダーや場合によっては独自のリポジトリに保存する必要があります。一方、`actions/github-script` は事前に認証されたクライアントを備えており、JavaScript ベースのアプローチを使用して簡単に GitHub API 呼び出しを行うことができます。
