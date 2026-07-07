---
question: "Ao criar GitHub Actions personalizadas, em qual arquivo todas as `metadados` da ação devem ser definidos?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
---

Exemplos de metadados: nome, descrição, saídas ou entradas obrigatórias
- [x] No arquivo `action.yml` ou `action.yaml` no repositório da ação
- [ ] No arquivo `README` do repositório
> Embora seja uma boa prática fazer isso, não é um requisito para que a ação funcione
- [ ] É editado na interface do GitHub Marketplace quando publicado para compartilhamento
- [ ] No arquivo `action.yml` ou `action.yaml` no repositório da ação, mas não é necessário se a ação não for destinada a ser compartilhada e usada pelo público
> Todas as ações requerem o arquivo de metadados.
