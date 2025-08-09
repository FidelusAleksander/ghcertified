---
question: "再利用可能なWorkflowに権限を渡す際の正しい記述はどれですか？"
title: "質問 001"
---


> https://docs.github.com/en/actions/using-workflows/reusing-workflows#access-and-permissions

1. [x] 呼び出し元Workflowから渡された `GITHUB_TOKEN` の権限は、呼び出されたWorkflowによってのみ制限（ダウングレード）することができる。
1. [ ] 呼び出し元Workflowから渡された `GITHUB_TOKEN` の権限は、呼び出されたWorkflowによってのみ引き上げ（エレベート）することができる。
1. [ ] 呼び出し元Workflowから渡された `GITHUB_TOKEN` の権限は、呼び出されたWorkflowによって制限および引き上げの両方が可能である。
1. [ ] 呼び出し元Workflowから渡された `GITHUB_TOKEN` の権限は、呼び出されたWorkflowによって制限も引き上げもできない。