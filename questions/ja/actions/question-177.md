---
question: "ワークフローは毎週月曜日と金曜日の午前12:00に起動する必要があります。次のスニペットのうち、この動作に該当するものはどれですか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule"
---

- [x] 
```yaml
on:
  schedule:
    - cron: '0 0 * * 1,5'
```
> `cron`構文では、項目は増加する単位の順序で定義されており、「曜日」の項目が最後に配置されます。詳細と例については、[ドキュメント](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)を参照してください。

- [ ] 
```yaml
on:
  schedule:
    - cron: '0 12 * * Mon,Fri'
```
> 「曜日」の項目は数値形式で指定する必要があります。また、「分」と「時間」の項目は午前12:00ではなく午後12:00を指します。

- [ ] 
```yaml
on:
  workflow_schedule:
    - cron: '0 0 * * 1,5'
```

- [ ] 
```yaml
on:
  workflow_schedule:
    - cron: '1,5 * * 0 0'
```

- [ ] 
```yaml
on:
  workflow_call:
    - days: [Mon,Fri]
    - times: [00]
```
