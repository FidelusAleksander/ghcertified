---
question: "Secretsと構成変数はどのスコープに設定できますか？（3つ選択）"
title: "質問 050"
---


> https://docs.github.com/en/actions/using-workflows/sharing-workflows-secrets-and-runners-with-your-organization#sharing-secrets-and-variables-within-an-organization
- [x] Organization全体、またはOrganization内の特定のRepository
- [x] 単一のRepository
- [x] Repository内のEnvironment
- [ ] 複数のRepositoryで共有されるEnvironment  
> EnvironmentはRepository間で共有できない
- [ ] OrganizationやEnterpriseを共有していない複数のRepository
- [ ] Repository内の特定のWorkflow  
> 環境変数はWorkflow単位でスコープ設定できるが、構成変数はできない
- [ ] Workflow内の特定のJob  
> 環境変数はWorkflow単位でスコープ設定できるが、構成変数はできない