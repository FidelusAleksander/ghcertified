---
question: "Você precisa garantir que seu ambiente `prod` exija aprovações manuais antes que os deploys possam prosseguir. Das opções a seguir, quais são verdadeiras sobre como isso é configurado?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments#required-reviewers"
---

- [x] Se você listar revisores obrigatórios, apenas um deles precisa aprovar para continuar com o deployment.
- [x] Você pode impedir auto-revisões no caso de a pessoa que deseja fazer o deploy também ser um revisor obrigatório.
- [ ] Se você listar revisores obrigatórios, todos eles precisam aprovar para continuar com o deployment.
> Surpreendentemente, apenas um dos revisores obrigatórios precisa aprovar o job do workflow. Para aplicar esse comportamento, você precisaria criar uma regra de proteção de deployment personalizada via um GitHub App.
- [ ] Você não pode evitar auto-revisões, mas pode configurar alertas para ver quem disparou o deployment.
- [ ] Apenas usuários individuais podem ser atribuídos como revisores obrigatórios, não equipes.
> Tanto usuários individuais quanto equipes podem ser atribuídos como revisores obrigatórios.
- [ ] Revisores obrigatórios precisam de acesso pelo menos de `write` ao repositório para aprovar.
> Revisores obrigatórios precisam de acesso pelo menos de `read`.
