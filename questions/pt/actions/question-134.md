---
question: "Como executar scripts personalizados em JavaScript diretamente em um workflow do GitHub Actions?"
documentation: "https://github.com/marketplace/actions/github-script"
---

- [x] Através da ação `actions/github-script`
> `actions/github-script` permite que você escreva e utilize JavaScript inline para fazer chamadas à API e acessar o contexto do workflow. Para usar `actions/github-script`, você o chama como qualquer outra ação, conforme visto na [documentação](https://github.com/actions/github-script)
- [ ] Habilitando a configuração 'Allow custom JavaScript scripts' nas configurações de Actions de um repositório
> Não existe uma configuração 'Allow custom JavaScript scripts' nas configurações de Actions de um repositório.
- [ ] Habilitando a configuração 'Allow custom JavaScript scripts' nas configurações de Actions de uma organização
> Não existe uma configuração 'Allow custom JavaScript scripts' nas configurações de Actions de um repositório. Embora você possa ter que habilitar configurações como 'Allow actions created by GitHub' nas configurações de Actions de uma organização para usar ações oficiais do GitHub, isso não está relacionado apenas ao `actions/github-script`.
- [ ] Escrever o conteúdo de um bloco de script na variável de ambiente `GITHUB_SCRIPT`
> `GITHUB_SCRIPT` não é uma variável de ambiente padrão do GitHub Actions. Uma lista de variáveis de ambiente padrão pode ser encontrada na [documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/variables).
- [ ] Em uma ação JavaScript, definir a chave `using` como `'github-script'`
> Ações JavaScript devem ter sua chave `using` definida como `node*`, onde * é uma versão suportada do Node.js. Geralmente, ações JavaScript não precisam utilizar `actions/github-script`.
