---
question: "Você bifurcou um repositório para melhorar um fluxo de trabalho que utiliza um secret para acessar um aplicativo de terceiros. Você acionou o fluxo de trabalho antes de editar seu código para obter um resultado inicial, mas descobriu que o fluxo de trabalho falhou. Por que isso ocorreu?"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets?tool=webui#using-secrets-in-a-workflow"
---

- [x] Repositórios bifurcados não herdam secrets do repositório original  
> Como medida de segurança, (com exceção de `GITHUB_TOKEN`) os secrets não são transmitidos ao runner quando um fluxo de trabalho é acionado a partir de um repositório bifurcado. Isso resultará na falha do fluxo de trabalho se ele referenciar um secret do repositório original.
- [ ] Ao herdar o secret do repositório original, ocorreu um erro durante a bifurcação que resultou em um secret malformado ou inválido
> Com exceção de `GITHUB_TOKEN`, os secrets não são transmitidos ao runner quando um fluxo de trabalho é acionado a partir de um repositório bifurcado. Portanto, tal malformação não poderia ocorrer.
- [ ] O secret herdado tinha um tamanho maior que 48 KB
> Com exceção de `GITHUB_TOKEN`, os secrets não são transmitidos ao runner quando um fluxo de trabalho é acionado a partir de um repositório bifurcado. Portanto, o tamanho não é um fator a ser considerado.
- [ ] Repositórios bifurcados herdam apenas secrets de repositórios, então o secret usado no fluxo de trabalho deve ser um secret organizacional ou de ambiente.
> Com exceção de `GITHUB_TOKEN`, os secrets não são transmitidos ao runner quando um fluxo de trabalho é acionado a partir de um repositório bifurcado. Isso se aplica a todos os tipos de secrets (repositório, ambiente e organizacional).
