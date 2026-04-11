---
question: "カスタムGitHub Actionsを作成する際、すべてのActionの `metadata` を定義する必要があるファイルはどれですか？"
title: "質問 054"
---


Metadata例: name、description、outputs、必須inputsなど  
> https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions
1. [x] ActionのRepository内の `action.yml` または `action.yaml` ファイル
1. [ ] Repositoryの `README` ファイル  
> 推奨ではあるが、Actionが動作するための必須条件ではない
1. [ ] 公開時にGitHub MarketplaceのUIで編集する
1. [ ] ActionのRepository内の `action.yml` または `action.yaml` ファイル（ただし、公開や共有を目的としない場合は必須ではない）  
> すべてのActionsにmetadataファイルは必須