---
question: "Webhook イベントに関連する check_run アクションでワークフローを実行するようトリガーする適切な設定はどれですか？"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#check_run"
---

- [x] 
```yaml
on:
    check_run:
        types: [rerequested, completed]
```

- [ ] 
```yaml
on:
    check_run:
        types: [started]
```

- [ ] 
```yaml
on:
    check_run:
        type: [closed]
```

- [ ] 
```yaml
on:
    check_run:
        filter: [requested]
```
