---
question: "`GITHUB_STEP_SUMMARY` に書き込むとどうなりますか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#adding-a-job-summary"
---

```yaml
- name: "テストスイートの結果を書き込む"
  run: |
    echo "The results of the testing suite are:" >> $GITHUB_STEP_SUMMARY
```
- [x] ジョブサマリーにこの行が追加されます
> `GITHUB_STEP_SUMMARY` に書き込むことで、ジョブサマリーに情報が追加されます。これは、ワークフローログの簡略化されたバージョンとして使用できます。
- [ ] GitHub Actions UI のステップ名にこの行をサブタイトルとして追加します
- [ ] ビルトイン成果物 `github-steps-summary.md` にこの行を追加します
- [ ] ステップレベルのデバッグメッセージとしてこの行を出力します
> ステップでデバッグメッセージを出力するには、`::debug::` の構文を使用する必要があります。リンクされたドキュメントの「Setting a debug message」セクションを参照してください。
