---
question: "空欄を埋めてください: セルフホストランナーを使用する場合、ツールキャッシュは ___"
documentation: "https://docs.github.com/en/enterprise-server@3.21/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access"
---

- [x] 初期状態では空であり、実行間でツールを保存するためにキャッシュを作成する必要がある
> ツールキャッシュはさまざまなバージョンのツールをキャッシュすることを可能にし、セルフホストランナーの動作を高速化します。ツールキャッシュがない場合、`actions/setup-*` を使用するセルフホストランナーは実行に時間がかかります。
- [ ] GitHubホストランナーと同様に、特定のツールが事前にインストールされた状態で開始される
> GitHubホストランナーには特定のツールが事前にインストールされていますが、セルフホストランナーにはそうではありません。
- [ ] GitHubホストランナーと同じツールがあり、さらにセルフホストランナー管理を強化するために選択されたカスタムツールが含まれている状態で開始される
- [ ] キャッシュを作成できない
