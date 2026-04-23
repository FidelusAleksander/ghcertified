---
question: "ワークフロー単位の`outputs`ブロックとジョブ単位の`outputs`ブロックについて、以下のうちどれが正しいですか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#example-defining-outputs-for-a-job"
---

- [ ] ジョブ単位の`outputs`ブロックは、再利用可能なワークフローではなく、呼び出し元のワークフローでのみ使用する必要があります。
> 再利用可能なワークフローには、ジョブ単位およびワークフロー単位の両方で`outputs`ブロックを含めることができます。
- [x] ワークフロー単位の`outputs`ブロックは、再利用可能なワークフローでのみ使用し、呼び出し元のワークフローでは使用しないでください。
> 「ワークフロー単位」の`outputs`ブロックとは、再利用可能なワークフロー内の`workflow_call`の直下の子要素である`outputs`ブロックを指します。再利用可能でないワークフローでは、`outputs`ブロックはジョブ単位でのみ存在する必要があります。
- [x] 再利用可能なワークフローには、ワークフロー単位およびジョブ単位の両方で`outputs`ブロックを含むことができます。
> 再利用可能なワークフローで出力を設定し、その同じ出力を呼び出し元のワークフローに渡す場合、ワークフロー単位およびジョブ単位の両方で`outputs`ブロックを使用する必要があります。 
> 詳細については、こちらのドキュメントをご覧ください: https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows#using-outputs-from-a-reusable-workflow
- [ ] ジョブ単位の`outputs`ブロックは、以下の構造である必要があります:
```
outputs:
    <output-name>
        value: ${{ steps.<step-name>.outputs.<output-name> }}
```
> ジョブ単位の`outputs`ブロックは、`key=value`ペアのネストされていない構造を使用します。詳細については、公式ドキュメント(https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#example-defining-outputs-for-a-job)をご覧ください。
- [x] ワークフロー単位の`outputs`ブロックは、以下の構造である必要があります:
```
outputs:
    <output-name>
        value: ${{ jobs.<job-name>.outputs.<output-name> }}
```
> ワークフロー単位の`outputs`ブロックは、上記の構造に従う必要があります。`value`キーは常に必須です。また、オプションで`description`キーも使用できます(上記の例には示されていません)。 
> 詳細については、こちらのドキュメントをご覧ください: https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows#using-outputs-from-a-reusable-workflow
