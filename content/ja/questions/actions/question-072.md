---
question: "GitHub Organization内で再利用できるコンポーネントはどれですか？（4つ選択）"
title: "質問 072"
---

- [x] Secrets
- [x] Configuration Variables
- [x] Self Hosted Runners
- [x] Workflow Templates
- [ ] Artifacts  
> Artifactsは、ジョブ完了後にデータを保持したり、同じWorkflow内の別のジョブとデータを共有するために使用される
- [ ] Cache  
> Cacheは、1つのRepository内のWorkflows間で再利用できる
- [ ] Environment Variables  
> 環境変数はステップ、ジョブ、またはWorkflowにスコープできるが、Workflows/Repositories/Organizations間で共有することはできない