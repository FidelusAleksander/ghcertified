---
question: "Observe os valores na chave `runs-on`, como vistos no job de workflow abaixo. O que é verdadeiro em relação à maneira como o job será executado?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow#using-custom-labels-to-route-jobs"
---
```yaml
jobs:
    fire_emblem_deploy:
        name: "Deploy da aplicação 'Fire Emblem'"
        runs-on: [self-hosted,nes,linux]
```

- [x] O job será executado em um runner self-hosted que tenha todos os rótulos aplicados.
- [ ] O job será executado em um runner self-hosted que tenha qualquer um dos rótulos aplicados.
> Os rótulos de runners são aplicados de forma cumulativa; um workflow não será executado em um runner que tenha apenas alguns dos rótulos. Todos são necessários.
- [ ] O job ainda poderá ser executado em runners hospedados pelo GitHub, já que eles podem ter rótulos personalizados aplicados a eles.
> Runners hospedados pelo GitHub não podem ter rótulos personalizados aplicados a eles. Eles devem ser referenciados com os [rótulos predefinidos](https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job#standard-github-hosted-runners-for-public-repositories) que lhes foram atribuídos.
- [ ] O job será executado em um runner (self-hosted ou hospedado pelo GitHub, o que estiver disponível primeiro) com o nome `self-hosted,nes,linux`.
> `runs-on` aponta para rótulos de runners, não para nomes.
