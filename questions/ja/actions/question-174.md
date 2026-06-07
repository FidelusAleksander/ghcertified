---
question: "以下のワークフローは、そのジョブの1つで再利用可能なワークフローを呼び出しています。再利用可能なワークフローには下記のようにワークフローレベルで`permissions`が定義されています。この再利用可能なワークフローを呼び出すとどうなりますか？"
documentation: "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
---

```yaml
# 呼び出し元ワークフロー
on:
    issues:
        types: [opened]
    
    permissions:
        contents: write

    jobs:
        issue_creator:
            permissions:
                contents: read
            uses: ./.github/workflows/issue-creator.yml

# 再利用可能なワークフロー (issue-creator.yml)
on:
    workflow_call:

    permissions:
        contents: write

    jobs:
        create_issue:
            runs-on: ubuntu-latest
            steps: 
                env: GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}    
                - run: gh issue create --title "Issue report" --body "Hello!" --repo $GITHUB_REPOSITORY

```
- [x] 再利用可能なワークフローはエラーを返します。なぜなら、呼び出したジョブが`contents:read`権限しか持っていないからです。
> このシナリオでは、呼び出し元ワークフローがトリガーされますが、そのジョブは実行されません。代わりに、再利用可能なワークフローが`contents: write`を要求しているにもかかわらず、呼び出し元が`contents: read`しか許可していないため、呼び出し元ワークフローのファイルが無効であるというエラーが生成されます。
- [ ] 再利用可能なワークフローにより、リポジトリ内にタイトルが`"Issue Report"`のIssueが作成されます。
> これは、`issue_creator`ジョブに`contents:write`権限がある場合に発生します。この場合、再利用可能なワークフローはそれを引き継ぐことができます。
- [ ] 再利用可能なワークフローは呼び出されません。なぜなら、再利用可能なワークフローは`.github/workflows`のサブフォルダ内に配置されていなければならないからです。
> すべてのワークフローは`.github/workflows`ディレクトリに配置されている必要があります。
- [ ] 呼び出し元および再利用可能なワークフローはどちらも呼び出されません。なぜなら、`issues`はGitHub Actionsで利用可能なトリガーではないからです。
> `issues`は標準のイベントトリガーであり、[ドキュメント](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#issues)でも確認できます。
