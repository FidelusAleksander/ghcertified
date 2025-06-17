---
question: "Quais são os casos de uso válidos para usar **defaults**? (Selecionar dois.)"
title: "Pergunta 027"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaults

- [x] Usar defaults.run no nível de fluxo de trabalho para definir o shell padrão (ex.: bash) para um fluxo de trabalho inteiro
- [x] Usar defaults.run no nível de job para definir o diretório de trabalho padrão para todas as etapas em um único job
- [ ] Usar defaults.run no nível de etapa para definir o shell padrão (ex.: bash) para aquela etapa única  
> defaults.run só pode ser configurado no nível de fluxo de trabalho ou de job
- [ ] Usar defaults.env no nível de fluxo de trabalho para definir variáveis de ambiente padrão para um fluxo de trabalho inteiro  
> Não existe defaults.env
- [ ] Usar defaults
