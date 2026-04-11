---
question: "`build` という名前の再利用可能なWorkflowがzipファイルの成果物を作成します。`build` Workflowを呼び出す呼び出し元Workflowにzipファイルの場所を渡すにはどうしますか？（3つ選択）"
title: "質問 026"
---

> https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow

- [x] `build` WorkflowでWorkflowレベルのoutputを定義する
- [x] `build` WorkflowでJobレベルのoutputを定義する
- [x] `build` Workflow内のステップで `$GITHUB_OUTPUT` にoutputを書き込む
- [ ] すべてのoutputは自動的に呼び出し元Workflowに渡される