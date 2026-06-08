---
question: "Seu fluxo de trabalho deve iniciar às 00:00 AM toda segunda e sexta-feira. Qual dos trechos a seguir corresponde a esse comportamento?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule"
---

- [x] 
```yaml
on:
  schedule:
    - cron: '0 0 * * 1,5'
```
> A sintaxe `cron` tem seus itens definidos em ordem de magnitude crescente, com a exceção de que o item "dia(s) da semana" é o último item. Consulte a [documentação](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07) para mais informações e exemplos.

- [ ] 
```yaml
on:
  schedule:
    - cron: '0 12 * * Mon,Fri'
```
> O item "dia(s) da semana" deve estar no formato numérico. Além disso, os itens "minuto" e "hora" apontam para 12:00 PM, não 00:00 AM.

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
