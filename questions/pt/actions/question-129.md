---
question: "`GITHUB_TOKEN` pode ser usado para fazer checkout de qualquer repositório."
documentation: "https://docs.github.com/en/actions/concepts/security/github_token#about-the-github_token"
---

- [ ] Verdadeiro
- [ ] Apenas com permissões elevadas
- [x] Falso
> As permissões do `GITHUB_TOKEN` são limitadas ao repositório que contém o workflow que foi acionado. 
> Para fazer checkout de outro repositório, outros métodos de token devem ser usados, como um token de acesso pessoal (PAT) ou um token de acesso de instalação.
