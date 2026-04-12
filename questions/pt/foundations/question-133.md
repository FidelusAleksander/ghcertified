---
question: "Qual combinação de operadores de busca avançada você usaria para encontrar repositórios públicos com mais de 100 estrelas que mencionam 'docker' em seu nome?"  
draft: false  
documentation: "https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories"
---

- [x] `in:name docker stars:>100 is:public`  
> **Correto**. Isso encontrará todos os repositórios públicos que têm 'docker' em seu nome e mais de 100 estrelas.  
- [ ] `docker in:description stars:<100 is:public`  
- [ ] `is:public name:docker stars:100`  
> Isso está faltando o operador de intervalo (`>`) para estrelas, e `name:docker` não é uma sintaxe válida.  
- [ ] `topic:docker stars:>100 in:readme`  
> Isso pesquisa dentro de tópicos ou readmes, e não no nome do repositório.  

