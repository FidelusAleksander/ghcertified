---
question: "Quais das opções a seguir são verdadeiras sobre os blocos `outputs` em nível de fluxo de trabalho versus nível de trabalho?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#example-defining-outputs-for-a-job"
---

- [ ] Os blocos `outputs` em nível de trabalho devem ser usados apenas em fluxos de trabalho chamadores, não em fluxos de trabalho reutilizáveis.
> Fluxos de trabalho reutilizáveis podem ter blocos `outputs` tanto em nível de trabalho quanto em nível de fluxo de trabalho.
- [x] Um bloco `outputs` em nível de fluxo de trabalho deve ser usado apenas em fluxos de trabalho reutilizáveis, não em fluxos de trabalho chamadores.
> Um bloco `outputs` em nível de "fluxo de trabalho" refere-se a um bloco `outputs` que é um filho direto de `workflow_call` em fluxos de trabalho reutilizáveis. Em fluxos de trabalho não reutilizáveis, os blocos `outputs` devem estar presentes apenas em nível de trabalho.
- [x] Um fluxo de trabalho reutilizável pode ter blocos `outputs` em nível de fluxo de trabalho e em nível de trabalho.
> Se for desejado definir uma saída em um fluxo de trabalho reutilizável e passar essa mesma saída para um fluxo de trabalho chamador, devem ser usados tanto um bloco `outputs` em nível de fluxo de trabalho quanto um bloco `outputs` em nível de trabalho.
> Consulte a documentação para mais detalhes https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows#using-outputs-from-a-reusable-workflow
- [ ] Um bloco `outputs` em nível de trabalho deve ter a seguinte estrutura:
```
outputs:
    <output-name>
        value: ${{ steps.<step-name>.outputs.<output-name> }}
```
> Um bloco `outputs` em nível de trabalho usa uma estrutura não aninhada de pares `key=value`. Consulte a documentação oficial (https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#example-defining-outputs-for-a-job) para mais detalhes.
- [x] Um bloco `outputs` em nível de fluxo de trabalho deve ter a seguinte estrutura:
```
outputs:
    <output-name>
        value: ${{ jobs.<job-name>.outputs.<output-name> }}
```
> Um bloco `outputs` em nível de fluxo de trabalho deve seguir a estrutura acima. A chave `value` é sempre obrigatória. Uma chave opcional `description` também pode ser usada (não apresentada no exemplo acima).
> Consulte a documentação para mais detalhes - https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows#using-outputs-from-a-reusable-workflow
