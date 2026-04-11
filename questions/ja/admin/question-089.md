---
question: "GitHubのOrganizationにSelf-hostedランナーグループを作成する手順はどれですか？"
title: "質問 089"
---

> https://docs.github.com/en/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups
1. [x] Organization設定に移動し、Actionsを選択、Runner groupsをクリック、新しいグループを作成し、Repositoryアクセスのポリシーを割り当てる
1. [ ] `.github` Repository内の`.gitconfig`ファイルを編集して、Runnerグループと関連するアクセスルールを指定する
1. [ ] GitHubサポートに連絡し、Runnerグループの作成とアクセス設定用Repositoryリストの提供を依頼する
1. [ ] Repositoryのアクティビティや利用パターンに基づいてRunnerグループを自動生成するGitHub Actions Workflowを使用する