---
question: "Your workflow must fire off at 12:00 AM every Monday and Friday. Which of the following snippets correlates to this behavior?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule"
---

- [x] 
```yaml
on:
  schedule:
    - cron: '0 0 * * 1,5'
```
> `cron` syntax has its items defined in order of increasing magnitude, with the exception that the "day(s) of the week" item being the last item. See the [documentation](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07) for more information and examples.

- [ ] 
```yaml
on:
  schedule:
    - cron: '0 12 * * Mon,Fri'
```
> The "day(s) of the week" item must be in numerical format. Additionally, the "minute" and "hour" items point to 12:00 PM, not 12:00 AM.

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