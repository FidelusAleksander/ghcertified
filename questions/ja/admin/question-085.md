---
question: "ワークフローの特定のワークロードをサポートする適切なランナーをどのように選択すべきですか？"
documentation: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#differences-between-github-hosted-and-self-hosted-runners"
---

- [x] カスタマイズされた環境にはセルフホストランナーを選択し、自動更新やクリーンなインスタンスに対応するにはGitHub-hostedランナーを選択する。
- [ ] 最大限のセキュリティを確保するため、すべてのワークロードにGitHub-hostedランナーを常に優先する。
- [ ] コストを最小限に抑えるため、ワークロードの複雑さに関わらずセルフホストランナーのみを使用する。
- [ ] 性能向上のためにカスタムハードウェア構成を備えたGitHub-hostedランナーの使用に限定する。
