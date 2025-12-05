---
question: "Como você pode usar cofres de terceiros para gerenciar segredos no GitHub Actions?"
title: "Question 091"
---

> https://developer.hashicorp.com/vault/docs/platform/github-actions
> https://bitwarden.com/help/github-actions-integration/
> https://docs.keeper.io/en/keeperpam/secrets-manager/integrations/github-actions
1. [x] Armazene segredos no cofre de terceiros e autentique do seu workflow (via a action/CLI do fornecedor) usando credenciais de acesso armazenadas como segredos do GitHub Actions para recuperá-los em tempo de execução.
1. [ ] A integração direta com cofres de terceiros é suportada nativamente no GitHub Actions sem necessidade de qualquer configuração adicional.
1. [ ] Cofres de terceiros devem ser acessados incorporando suas chaves de API nos arquivos do workflow e utilizando a API ou CLI do fornecedor.
1. [ ] O GitHub Actions não suporta o uso de cofres de terceiros para gerenciamento de segredos; todos os segredos devem ser armazenados no GitHub.
