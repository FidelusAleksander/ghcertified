---
question: "check_run Actionsに関連するWebhookイベントでWorkflowをトリガーする適切な設定はどれですか？"
title: "質問 108"
---

> https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#check_run

1. [x] 
```yaml
on:
    check_run:
        types: [rerequested, completed]
```

1. [ ] 
```yaml
on:
    check_run:
        types: [started]
```

1. [ ] 
```yaml
on:
    check_run:
        type: [closed]
```

1. [ ] 
```yaml
on:
    check_run:
        filter: [requested]
```