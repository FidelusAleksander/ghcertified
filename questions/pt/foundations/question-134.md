---
title: "Pergunta 134"  
question: "Qual das opções abaixo descreve melhor o GitHub secret scanning?"  
draft: false  
---

> **Mais informações**: [Sobre secret scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)

1. [ ] Um recurso que analisa issues em busca de credenciais não verificadas e as exclui automaticamente.  
  > Secret scanning não exclui nada automaticamente; ele detecta segredos possivelmente expostos.  
1. [ ] Um recurso que criptografa os segredos do seu repositório antes de enviá-los para o GitHub.  
  > GitHub Actions Encrypted Secrets cuida da criptografia, mas isso é diferente de secret scanning.  
1. [ ] Um recurso que executa gerenciadores de senhas de terceiros em seu código para armazenar segredos com segurança.  
1. [x] Um recurso que busca formatos conhecidos de segredos nos repositórios para evitar a exposição acidental de dados sensíveis.  
  > **Correto**. Secret scanning detecta tokens, chaves e outras credenciais para ajudar a evitar vazamentos.  

