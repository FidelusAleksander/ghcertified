---
question: "GitHub Actionsでbranchesフィルターとpathsフィルターを両方定義した場合、Workflow実行にどのような影響がありますか？"
title: "質問 103"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore
1. [x] 両方の `branches` と `paths` が満たされたときのみWorkflowが実行される
1. [ ] `branches` または `paths` のいずれかが満たされたときにWorkflowが実行され、該当するフィルターのみ適用される
1. [ ] `branches` または `paths` のいずれかが満たされたときにWorkflowが実行される
1. [ ] 両方の `branches` と `paths` が満たされた場合はWorkflowが実行されない