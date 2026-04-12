---
question: "Quais são os casos de uso válidos para utilizar **defaults**?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaults"
---

- [x] Usar defaults.run no nível do workflow para definir o shell padrão (ex. bash) para todo o workflow
- [x] Usar defaults.run no nível do job para definir o diretório de trabalho padrão para todos os steps em um único job
- [ ] Usar defaults.run no nível do step para definir o shell padrão (ex. bash) para aquele único step  
> defaults.run só pode ser definido no nível do workflow ou job
- [ ] Usar defaults.env no nível do workflow para definir variáveis de ambiente padrão para todo o workflow  
> Não existe defaults.env
- [ ] Usar defaults.env no nível do job para definir variáveis de ambiente padrão para todos os steps em um único job  
> Não existe defaults.env
