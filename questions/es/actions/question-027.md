---
question: "¿Cuáles son los casos de uso válidos para usar **defaults**?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaults"
---

- [x] Usar defaults.run a nivel de workflow para establecer el shell predeterminado (por ejemplo, bash) para todo un workflow
- [x] Usar defaults.run a nivel de job para establecer el directorio de trabajo predeterminado para todos los pasos en un solo job
- [ ] Usar defaults.run a nivel de step para establecer el shell predeterminado (por ejemplo, bash) para ese único paso  
> defaults.run solo puede ser configurado a nivel de workflow o de job
- [ ] Usar defaults.env a nivel de workflow para establecer variables de entorno predeterminadas para todo un workflow  
> No existe algo como defaults.env
- [ ] Usar defaults.env a nivel de job para establecer variables de entorno predeterminadas para todos los pasos en un solo job  
> No existe algo como defaults.env

