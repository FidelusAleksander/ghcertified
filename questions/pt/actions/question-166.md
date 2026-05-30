---
question: "Ações JavaScript e `actions/github-script` utilizam JavaScript. Por que você deveria usar `actions/github-script` em vez de criar sua própria ação JavaScript?"
documentation: "https://github.com/actions/github-script"
---

- [x] `actions/github-script` deve ser usado para scripts curtos em linha
- [x] `actions/github-script` deve ser usado quando você quiser usar um cliente pré-autenticado para interagir com a API do GitHub.
- [x] Ações JavaScript devem ser usadas quando você quiser uma ação personalizada reutilizável para ser usada em vários repositórios
- [ ] Ações JavaScript devem ser usadas para scripts curtos em linha
- [ ] `actions/github-script` deve ser usado quando você precisar utilizar um ambiente Node.js ajustado com várias dependências específicas
> Embora você possa instalar módulos para que o `actions/github-script` use antes de chamá-lo, se várias dependências forem necessárias, isso resulta em várias etapas no fluxo de trabalho. O `actions/github-script` também não permite alterar a versão do Node.js; você está vinculado à versão que ele define.
- [ ] Ações JavaScript devem ser usadas quando você quiser uma solução de baixo custo para fazer chamadas à API do GitHub.
> Ações JavaScript não têm baixo custo; elas exigem a criação de um arquivo `action.yml`, que por sua vez deve ser armazenado em sua própria pasta ou até mesmo em seu próprio repositório, dependendo da abordagem. O `actions/github-script` vem com um cliente pré-autenticado que facilita fazer chamadas à API do GitHub usando uma abordagem baseada em JavaScript.
