---
question: "Ao criar ações personalizadas do GitHub - em qual arquivo todos os `metadados` da ação devem ser definidos?"
archetype: "questions"
title: "Questão 054"
---


Exemplos de metadados: nome, descrição, saídas ou entradas obrigatórias
> https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions
1. [x] No arquivo `action.yml` ou `action.yaml` no repositório da ação
1. [ ] No arquivo `README` do repositório
> Embora seja uma boa prática fazer isso, não é um requisito para a ação funcionar
1. [ ] É editado na interface do GitHub Marketplace quando publicado para compartilhamento
1. [ ] No arquivo `action.yml` ou `action.yaml` no repositório da ação, mas não é necessário se a ação não for destinada a ser compartilhada e usada pelo público
> Todas as ações requerem o arquivo de metadados.
