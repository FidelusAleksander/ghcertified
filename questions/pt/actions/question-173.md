---
question: "Uma organização possui vários repositórios que compartilham um ambiente especializado de Node.js hospedado em uma rede privada. O próximo objetivo da organização envolve a configuração de um software de bloqueio de nós dentro dessa rede. Qual das seguintes opções atenderia melhor às necessidades da organização em relação à execução de workflows?"
documentation: "https://docs.github.com/en/actions/concepts/runners/self-hosted-runners"
---

- [x] Self-hosted runners configurados no nível da organização
- [ ] Um self-hosted runner por repositório, configurado no nível do repositório
> Isso seria duplicado e complexo de gerenciar. Os repositórios podem referenciar o mesmo runner no nível da organização, que é a abordagem correta nesta situação.
- [ ] GitHub-hosted runners, com todos os workflows utilizando `actions/setup-node`
> GitHub-hosted runners são [efêmeros](https://docs.github.com/en/actions/concepts/runners/github-hosted-runners#overview-of-github-hosted-runners), o que significa que uma nova instância do runner é configurada para cada execução de workflow. Isso não funcionaria bem com um software de bloqueio de nós, que permite que o software seja executado apenas em um dispositivo/VM específico. Além disso, embora os GitHub-hosted runners possam ser configurados para acessar redes privadas, isso não é uma funcionalidade padrão.
- [ ] GitHub-hosted runners configurados no nível da organização
> GitHub-hosted runners não podem ser configurados dessa forma.
- [ ] GitHub-hosted runners, usando `runs-on: [node<version>]` (`<version>` sendo a versão desejada do Node) em todos os workflows.
> `[node<version>]` não aponta para nenhum GitHub-hosted runner.
