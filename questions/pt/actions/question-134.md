---
question: "Como executar scripts JavaScript personalizados diretamente em um workflow do GitHub Actions?"
documentation: "https://github.com/marketplace/actions/github-script"
---

- [x] Por meio da ação `actions/github-script`
> `actions/github-script` permite que você escreva e utilize JavaScript inline para fazer chamadas de API e acessar o contexto do workflow. Para usar o `actions/github-script`, você o chama como qualquer outra ação, conforme descrito na [documentação](https://github.com/actions/github-script).
- [ ] Habilitando a configuração 'Allow custom JavaScript scripts' nas configurações de Actions de um repositório
> Não existe uma configuração 'Allow custom JavaScript scripts' nas configurações de Actions de um repositório.
- [ ] Habilitando a configuração 'Allow custom JavaScript scripts' nas configurações de Actions de uma organização
> Não existe uma configuração 'Allow custom JavaScript scripts' nas configurações de Actions de um repositório. Embora você possa precisar habilitar configurações como 'Allow actions created by Github' nas configurações de Actions de uma organização para usar ações oficiais do GitHub, isso não está relacionado apenas ao `actions/github-script`.
- [ ] Escrevendo o conteúdo de um bloco de script na variável ambiental `GITHUB_SCRIPT`
> `GITHUB_SCRIPT` não é uma variável ambiental padrão do GitHub Actions. Uma lista de variáveis ambientais padrão pode ser encontrada na [documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/variables).
- [ ] Em uma ação JavaScript, configure a chave `using` para `'github-script'`
> Ações JavaScript devem ter a chave `using` configurada como `node*`, onde `*` é uma versão do Node.js suportada. Geralmente, ações JavaScript não têm necessidade de utilizar `actions/github-script`.
