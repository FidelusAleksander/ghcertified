---
question: "Preencha o espaço em branco: Ao usar runners auto-hospedados, o cache de ferramentas ___"
documentation: "https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access"
---

- [x] começa vazio e deve ser preenchido para salvar ferramentas entre as execuções
> Os caches de ferramentas permitem armazenar diferentes versões de ferramentas, o que possibilita uma atividade mais rápida de runners auto-hospedados. Sem caches de ferramentas, runners auto-hospedados que usam `actions/setup-*` levarão mais tempo para executar.
- [ ] começa semelhante aos runners hospedados pelo GitHub, pois vem pré-preenchido com certas ferramentas
> Embora os runners hospedados pelo GitHub venham com determinadas ferramentas pré-instaladas, isso não ocorre com runners auto-hospedados.
- [ ] começa com as mesmas ferramentas que os runners hospedados pelo GitHub, além de uma seleção personalizada para melhorar o gerenciamento de runners auto-hospedados
- [ ] não pode ser preenchido
