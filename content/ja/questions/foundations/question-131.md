---
title: "質問 131"  
question: "RepositoryをCloneすることとForkすることの違いを最もよく表している説明はどれですか？"  
draft: false  
---

> **詳細**: [About forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)

1. [ ] RepositoryをCloneすると、Pushした変更は直接元のRepositoryに反映される。Forkには別のローカルコピーが必要。  
  > CloneとForkのどちらもローカルコピーを作成するが、Cloneで元のRepositoryにPushするには適切な権限が必要。  
1. [x] Forkは自分のGitHubアカウントにコピーを作成し、Cloneはアカウント所有と紐づかないローカルコピーを作成する。  
  > **正解**。ForkはGitHub上の自分のアカウントに表示されるコピーで、Cloneはローカルのみのコピー。  
1. [ ] Cloneは常にRepositoryの所有権を移転するが、Forkはそうではない。  
1. [ ] ForkはPrivate Repositoryのみ可能で、CloneはPublic Repositoryのみ可能。