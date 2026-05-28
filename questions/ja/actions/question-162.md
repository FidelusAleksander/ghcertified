---
question: "メルセデスは、自分が作成したDockerコンテナアクションをGitHub Actions Marketplaceに公開したいと考えています。公開するために最低限必要なファイルは何ですか？"
documentation: "https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace"
---

- [x] `action.yml`
> `action.yml`ファイルは、アクションの種類に関係なく、Marketplaceに公開するために必須です。
- [x] `Dockerfile` （ワークフロー実行中にアクションとしてイメージを構築する場合）
> Dockerコンテナアクションは、イメージを最初から作成する必要があり、イメージレジストリからプルできない場合にのみ`Dockerfile`が必要です。`action.yml`内の`runs.image`の値は`Dockerfile`のパスである必要があります。
- [ ] `Dockerfile` （イメージをイメージレジストリから参照する場合）
> イメージレジストリ内のイメージを参照する場合、`Dockerfile`は必要ありません。`action.yml`内の`runs.image`キーの値は`docker://`で始まり、続いてイメージ名が続く必要があります。[documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax#runsimage)の「runs」および「runs.image」セクションを参照してください。
- [ ] `README.md`
> アクションをMarketplaceに公開する際、`README.md`ファイルはGitHubによって推奨されていますが、必須要件ではありません。
- [ ] `.dockerignore`
- [ ] `CONTRIBUTING.md`
