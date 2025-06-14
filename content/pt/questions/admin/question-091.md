---
question: "Como você pode usar cofres de terceiros para gerenciar segredos no GitHub Actions?"
title: "Pergunta 091"
---

> https://developer.hashicorp.com/vault/docs/platform/github-actions  
> https://bitwarden.com/help/github-actions-integration/  
> https://docs.keeper.io/en/keeperpam/secrets-manager/integrations/github-actions  
1. [x] Armazene segredos no cofre de terceiros e use uma etapa de descriptografia em seu workflow para acessá-los, com a chave de descriptografia armazenada como um segredo do GitHub Actions.  
1. [ ] A integração direta com cofres de terceiros é suportada nativamente no GitHub Actions sem a necessidade de configuração adicional.  
1. [ ] Cofres de terceiros devem ser acessados incorporando suas chaves de API nos arquivos de workflow e usando a API ou CLI desse fornecedor.  
1. [ ] O GitHub Actions não suporta o uso de cofres de terceiros para gerenciamento de segredos; todos os segredos devem ser armazenados no próprio GitHub.  
