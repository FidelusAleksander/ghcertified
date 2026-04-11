---
question: "Ao criar GitHub Actions personalizadas - em qual arquivo todas as informações de `metadata` da action devem ser definidas?"
title: "Pergunta 054"
---

Exemplos de metadata: nome, descrição, outputs ou inputs obrigatórios  
> https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions  
1. [x] No arquivo `action.yml` ou `action.yaml` no repositório da action  
1. [ ] No arquivo `README` do repositório  
> Apesar de ser uma boa prática, não é um requisito para que a action funcione  
1. [ ] É editado na interface do GitHub Marketplace quando publicado para compartilhamento  
1. [ ] No arquivo `action.yml` ou `action.yaml` no repositório da action, mas não é obrigatório se a action não for destinada a ser compartilhada e utilizada pelo público  
> Todas as actions requerem o arquivo de metadata.  
