---
question: "Quando você construiria uma ação de contêiner Docker para compartilhar no GitHub Actions marketplace?"
documentation: "https://docs.github.com/en/actions/concepts/workflows-and-actions/custom-actions#docker-container-actions"
---

- [x] As ações de contêiner Docker garantem um ambiente de execução consistente e dependências específicas sem que os usuários precisem lidar com esses aspectos por conta própria
- [ ] As ações de contêiner Docker são uma ação pronta para uso e de baixo custo
> As ações de contêiner Docker não são consideradas de baixo custo, pois exigem o uso de uma imagem (pré-construída ou especificada pelo `Dockerfile`), um script de ponto de entrada e, possivelmente, lógica de pré e pós-ponto de entrada.
- [ ] As ações de contêiner Docker têm velocidade de inicialização rápida nos runners do Windows e macOS
> Contêineres Docker só podem ser executados em runners de sistema operacional Linux (`ubuntu-latest` para runners hospedados pelo GitHub). Eles também demoram mais em comparação com ações em JavaScript e compostas.
- [ ] As ações de contêiner Docker são um conjunto de etapas dentro de outros workflows que são executados no contexto do workflow/ação que os chamou
> Um "conjunto reutilizável de etapas" descreve uma ação composta, não uma ação de contêiner Docker
- [ ] As ações de contêiner Docker permitem que você utilize o Docker sem exigir um arquivo `action.yml`
> Todas as ações, independentemente do tipo, devem usar um arquivo `action.yml`
