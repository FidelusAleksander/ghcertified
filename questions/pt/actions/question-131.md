---
question: "Quais das seguintes opções são verdadeiras sobre chamar workflows reutilizáveis em comparação com chamar ações compostas?"
documentation: "https://docs.github.com/en/actions/concepts/workflows-and-actions/reusing-workflow-configurations#key-differences-between-reusable-workflows-and-composite-actions"
---

- [x] Ações compostas são chamadas referenciando a pasta que contém seu arquivo `action.yml`.
> Como uma ação, as ações compostas devem conter a maior parte de sua lógica dentro de um arquivo `action.yml`. Para chamar a ação composta, aponte para onde seu `action.yml` está localizado (isso inclui a raiz. Ex.: para chamar uma ação composta localizada na raiz do mesmo repositório que o workflow de chamada, a sintaxe `uses: ./` seria usada).
- [ ] Workflows reutilizáveis são chamados referenciando a pasta que contém seu arquivo `action.yml`.
> Workflows reutilizáveis são arquivos regulares `.yml` ou `.yaml` que são armazenados em `.github/workflows`. Eles não possuem um arquivo `action.yml`.
- [x] Ações compostas devem ser chamadas como um passo dentro de um job.
> Ações compostas (como qualquer outra ação) são chamadas dentro de um passo de um job de workflow - ou seja, você não precisa de um job de workflow específico apenas para chamar uma ação composta.
- [x] Workflows reutilizáveis devem ser chamados no nível de job do workflow (não no nível de passo).
> Passos dentro de um job de workflow não podem chamar um workflow reutilizável. Um workflow reutilizável deve ser chamado por um job individual dentro do workflow de chamada. Isso pode resultar em um ou mais jobs sendo executados no workflow de chamada (esses jobs podem ser vistos nas execuções de workflow na interface do usuário do GitHub Actions).
- [ ] Secrets podem ser passados tanto para workflows reutilizáveis quanto para chamadas de ações compostas através do bloco `uses.secrets`.
> Apenas workflows reutilizáveis podem ser chamados usando o bloco `secrets`. Para passar secrets para uma ação composta, devem ser utilizadas soluções alternativas (como passar o secret como uma entrada).
- [ ] Apenas workflows reutilizáveis podem aceitar entradas.
> Tanto workflows reutilizáveis quanto ações compostas podem aceitar entradas.
- [x] Workflows reutilizáveis podem usar um tipo de runner diferente do workflow de chamada, enquanto ações compostas não podem.
> Workflows reutilizáveis possuem jobs como qualquer outro workflow, e esses jobs podem especificar diferentes tipos de runner através da chave `jobs.runs-on`. Ações compostas herdam o ambiente do runner do job do workflow de chamada.
