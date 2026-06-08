---
question: "Twój workflow musi uruchamiać się o godzinie 12:00 AM w każdy poniedziałek i piątek. Który z poniższych fragmentów kodu odpowiada temu wymaganiu?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule"
---

- [x] 
```yaml
on:
  schedule:
    - cron: '0 0 * * 1,5'
```
> Składnia `cron` określa elementy w porządku rosnącej wielkości, z wyjątkiem elementu "dzień tygodnia", który jest ostatnim elementem. Zobacz [dokumentację](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07) dla dodatkowych informacji i przykładów.

- [ ] 
```yaml
on:
  schedule:
    - cron: '0 12 * * Mon,Fri'
```
> Element "dzień tygodnia" musi być w formacie numerycznym. Dodatkowo, elementy "minuta" i "godzina" wskazują na 12:00 PM, a nie 12:00 AM.

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
