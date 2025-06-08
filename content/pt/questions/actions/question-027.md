---
question: "Quais são os casos de uso válidos para usar **defaults**? (Selecione dois.)"
title: "Pergunta 027"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaults

- [x] Usar defaults.run no nível do workflow para definir o shell padrão (por exemplo, bash) para todo o workflow
- [x] Usar defaults.run no nível do job para definir o diretório de trabalho padrão para todos os steps em um único job
- [ ] Usar defaults.run no nível do step para definir o shell padrão (por exemplo, bash) para aquele único step  
> defaults.run só pode ser definido no nível do workflow ou do job
- [ ] Usar defaults.env no nível do workflow para definir variáveis de ambiente padrão para todo o workflow  
> Não existe defaults.env
- [ ] Usar defaults.env no nível do job para definir variáveis de ambiente padrão para todos os steps em um único job  
> Não existe defaults.env
