---
question: "GitHubで組織のセルフホストランナーグループを作成するには、どのような手順が必要ですか？"
documentation: "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access"
---

- [x] 組織の設定に移動し、Actionsを選択、Runnerグループをクリック、新しいグループを作成してリポジトリのアクセスポリシーを割り当てます。
- [ ] `.github`リポジトリ内で、ランナーグループと関連するアクセスポリシーを指定するために`.gitconfig`ファイルを変更します。
- [ ] ランナーグループの作成を依頼し、アクセス構成のためのリポジトリ一覧を提出するようGitHubサポートに連絡します。
- [ ] リポジトリアクティビティと使用パターンに基づいてランナーグループを自動生成するためのGitHub Actionsワークフローを使用します。
