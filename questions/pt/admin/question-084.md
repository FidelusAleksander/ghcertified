---
question: "Quais são alguns vetores potenciais de abuso ao habilitar runners auto-hospedados em repositórios públicos?"
documentation: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#self-hosted-runner-security"
---

- [x] Programas maliciosos sendo executados na máquina
- [x] Escapando do ambiente sandbox do runner
- [x] Exposição do ambiente de rede
- [x] Persistência de dados perigosos
- [ ] A limpeza automática do ambiente após a execução do job pode causar perda de dados
- [ ] Menor eficiência computacional devido a medidas de segurança
- [ ] Integração limitada com os serviços hospedados no GitHub
