---
title: "Pergunta 134"  
question: "Qual das seguintes opções melhor descreve a verificação de segredos do GitHub?"  
draft: false  
---

> **Mais informações**: [Sobre a verificação de segredos](https://docs.github.com/pt/code-security/secret-scanning/about-secret-scanning)

1. [ ] Um recurso que examina problemas em busca de credenciais não verificadas e as exclui automaticamente.  
  > A verificação de segredos não exclui nada automaticamente; ela detecta segredos potencialmente expostos.  
1. [ ] Um recurso que criptografa os segredos do seu repositório antes de enviá-los para o GitHub.  
  > Os Segredos Criptografados do GitHub Actions lidam com a criptografia, mas isso é diferente da verificação de segredos.  
1. [ ] Um recurso que executa gerenciadores de senhas de terceiros no seu código para armazenar segredos com segurança.  
1. [x] Um recurso que pesquisa repositórios em busca de formatos conhecidos de segredos para evitar a exposição acidental de dados sensíveis.  
  > **Correto**. A verificação de segredos detecta tokens, chaves e outras credenciais para ajudar a evitar vazamentos.  

