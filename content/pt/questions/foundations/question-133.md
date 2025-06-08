---
title: "Pergunta 133"  
question: "Qual combinação de operadores de busca avançada você usaria para encontrar repositórios públicos com mais de 100 estrelas que mencionam 'docker' no nome?"  
draft: false  
---

> **Mais informações**: [Buscando repositórios](https://docs.github.com/pt/search-github/searching-on-github/searching-for-repositories)

1. [x] `in:name docker stars:>100 is:public`  
  > **Correto**. Isso encontrará todos os repositórios públicos que contêm 'docker' no nome e têm mais de 100 estrelas.  
1. [ ] `docker in:description stars:<100 is:public`  
1. [ ] `is:public name:docker stars:100`  
  > Isso está faltando o operador de intervalo (`>`) para estrelas, e `name:docker` não é uma sintaxe válida.  
1. [ ] `topic:docker stars:>100 in:readme`  
  > Isso busca em tópicos ou arquivos readme, não no nome do repositório.  

