---
question: "Tu flujo de trabajo debe activarse a las 12:00 AM todos los lunes y viernes. ¿Cuál de los siguientes fragmentos corresponde a este comportamiento?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule"
---

- [x] 
```yaml
on:
  schedule:
    - cron: '0 0 * * 1,5'
```
> La sintaxis de `cron` tiene sus elementos definidos en orden de magnitud creciente, con la excepción de que el elemento de "día(s) de la semana" es el último elemento. Consulta la [documentación](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07) para más información y ejemplos.

- [ ] 
```yaml
on:
  schedule:
    - cron: '0 12 * * Mon,Fri'
```
> El elemento "día(s) de la semana" debe estar en formato numérico. Además, los elementos "minuto" y "hora" apuntan a las 12:00 PM, no a las 12:00 AM.

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
