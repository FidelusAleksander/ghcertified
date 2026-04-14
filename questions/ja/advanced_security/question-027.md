---
question: "リポジトリのGitHub Dependency graphはいつ更新されますか？"
documentation: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security#what-is-the-dependency-graph"
---

- [x] あなたの依存関係の1つのリポジトリに変更がプッシュされたとき。
- [x] サポートされているマニフェスト/ロックファイルを変更または追加する場合にのみ、リポジトリのデフォルトブランチにコミットをプッシュしたとき。
- [ ] リポジトリのデフォルトブランチに任意のコミットをプッシュしたとき。
- [ ] リポジトリが新しいリリースを公開したとき。
- [ ] リポジトリが新しいGitタグを公開したとき。
- [ ] `actions/dependency-graph` GitHub Actionを使用するGitHub Actionsワークフローがトリガーされたとき。
