---
question: "Por que usar um SHA de commit ao invés de uma tag para fixar uma action?"
documentation: "https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions"
---

- [x] SHAs de commit são mais seguros
> SHAs de commit são mais seguros porque atualmente são a única forma de usar uma action como um lançamento imutável.
- [x] SHAs de commit são imutáveis, enquanto tags têm o potencial de serem alteradas
> [Tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging) apontam para commits específicos. Sua referência pode ser alterada, o que nem sempre é evidente. Vulnerabilidades relacionadas a tags podem ser mitigadas ativando [lançamentos imutáveis](https://docs.github.com/en/code-security/concepts/supply-chain-security/immutable-releases), mas um SHA de commit sempre apontará para o mesmo commit e é imutável.  
> Reexecutar um workflow usa o mesmo SHA de commit e referência Git do evento original que acionou a execução do workflow.
- [ ] SHAs de commit são mais convenientes de usar em comparação com tags
> Apesar de serem mais seguros, as tags são geralmente mais fáceis de usar.
- [x] SHAs de commit garantem apontar para exatamente o mesmo código todas as vezes, enquanto as tags não
- [ ] SHAs de commit são mais difíceis de rastrear em uma auditoria, dificultando para agentes mal-intencionados determinar como o código de uma action se encaixa nos processos gerais.
> SHAs de commit sempre apontam para o mesmo commit. Ao fixar uma ação em um SHA, o SHA é explicitamente referenciado, o que significa que você pode encontrar o commit correspondente no repositório da action. Esses fatores tornam a auditoria mais fácil.  
> Tags podem ter suas referências alteradas, e isso nem sempre é evidente. Isso pode resultar em cenários confusos quando a tag aponta para um novo commit, porque o código que referencia a ação aparenta não ter sido modificado. Assim, em cenários de auditoria, será necessário descobrir para qual commit a tag estava apontando e para qual ela está apontando atualmente.
