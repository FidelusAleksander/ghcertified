---
question: "空欄を埋めてください：セルフホストのランナーを使用する場合、ツールキャッシュは___"
documentation: "https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access"
---

- [x] 最初は空であり、ツールをラン間で保存するためにポピュレートする必要があります
> ツールキャッシュを使用すると、さまざまなバージョンのツールをキャッシュでき、セルフホストランナーの作業を迅速化できます。ツールキャッシュがない場合、`actions/setup-*` を使用するセルフホストランナーは実行に時間がかかります。
- [ ] GitHubホストランナーと同じように、特定のツールが事前にインストールされた状態で開始されます
> GitHubホストランナーは特定のツールが事前にインストールされていますが、セルフホストランナーではそうではありません。
- [ ] GitHubホストランナーと同じツールの他に、セルフホストランナーの管理を強化するための選択されたカスタムツールを備えた状態で開始されます
- [ ] ポピュレートすることはできません
