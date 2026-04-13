---
question: "GitHub組織でセルフホストランナーグループを作成するにはどのようなステップが必要ですか？"
documentation: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups"
---

- [x] 組織設定に移動し、Actionsを選択、Runner groupsをクリックして新しいグループを作成し、リポジトリアクセスポリシーを割り当てます。
- [ ] `.github`リポジトリ内の`.gitconfig`ファイルを変更して、ランナーグループと関連するアクセスポリシーを指定します。
- [ ] GitHubサポートに連絡してランナーグループの作成を依頼し、アクセス構成のためのリポジトリリストを提供します。
- [ ] リポジトリのアクティビティと使用パターンに基づいて自動的にランナーグループを生成するGitHub Actionsワークフローを使用します。
