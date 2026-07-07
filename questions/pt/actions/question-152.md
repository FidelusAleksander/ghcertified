---
question: "Preencha o espaço em branco: Ao usar runners auto-hospedados, o cache de ferramentas ___"
documentation: "https://docs.github.com/en/enterprise-server@3.21/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access"
---

- [x] começa vazio e deve ser populado para salvar ferramentas entre execuções
> Os caches de ferramentas permitem armazenar diferentes versões de ferramentas, o que possibilita uma atividade mais rápida dos runners auto-hospedados. Sem caches de ferramentas, os runners auto-hospedados que usam `actions/setup-*` demoram mais para executar.
- [ ] começa da mesma maneira que os runners hospedados pelo GitHub, ou seja, pré-populado com certas ferramentas
> Embora os runners hospedados pelo GitHub venham com algumas ferramentas pré-instaladas, esse não é o caso para os runners auto-hospedados.
- [ ] começa com as mesmas ferramentas que os runners hospedados pelo GitHub, além de uma seleção de ferramentas personalizadas para melhorar a gestão de runners auto-hospedados
- [ ] não pode ser populado
