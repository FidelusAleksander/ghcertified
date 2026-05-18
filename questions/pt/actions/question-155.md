---
question: "Marianne tem um branch de feature que contém seu novo arquivo de workflow, que está configurado para ser acionado às 2h da manhã todos os dias, usando a sintaxe abaixo. No entanto, no dia seguinte, o workflow não é acionado. Qual pode ser o motivo disso?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule"
---

```yaml
on:
    schedule:
        cron:
            "0 2 * * *"
```

- [x] O arquivo de workflow deve existir no branch padrão para ser acionado pelo evento `schedule`
- [ ] A sintaxe de `cron` não está agendada corretamente
> `"0 2 * * *"` na sintaxe CRON significa "executar todos os dias às 2h da manhã". Mesmo que a programação estivesse configurada incorretamente, o workflow ainda não seria acionado, pois não está presente no branch padrão.
- [ ] `schedule` não pode ser o único evento no workflow. Ele deve ser emparelhado com um evento baseado no repositório, como `push`
- [ ] A sintaxe `@daily` não foi utilizada
> A sintaxe não padrão do CRON, como `@daily`, não é suportada pelo GitHub Actions.
- [ ] O repositório privado que contém o workflow não teve nenhuma atividade no repositório por mais de 60 dias, desativando automaticamente o workflow.
> Essa desativação automática ocorre apenas em repositórios públicos, e não em repositórios privados.
