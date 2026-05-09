---
question: "De quais maneiras é possível baixar um artefato?"
documentation: "https://github.com/actions/upload-artifact#inputs"
---

- [x] Usando a ação `actions/download-artifact` em um workflow 
- [x] Baixando artefatos da interface do usuário do GitHub Actions no fluxo de execução do workflow
> Usar a interface oferece uma abordagem prática para baixar artefatos. Consulte a [documentação](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/download-workflow-artifacts) para mais detalhes.
- [x] Usando um endpoint específico da API do GitHub
> A API do GitHub possui um endpoint "Baixar um artefato". Consulte a [documentação](https://docs.github.com/en/rest/actions/artifacts?apiVersion=2026-03-10#download-an-artifact) para mais detalhes.
- [ ] Usando a ação `actions/upload-artifact` em um workflow
> `actions/upload-artifact` é usado para enviar artefatos, não para baixá-los 
- [ ] Acessando remotamente runners auto-hospedados via SSH e acessando o diretório `.github/artifacts`
> Geralmente, artefatos são armazenados usando a infraestrutura do GitHub, não nos runners. Há uma exceção: ao usar o GitHub Enterprise Server (GHES), os artefatos e outros dados gerados por execuções de workflow são armazenados em um armazenamento externo de blobs. Consulte a [documentação](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements) para mais detalhes sobre o armazenamento no GHES.
