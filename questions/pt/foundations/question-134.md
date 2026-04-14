---
question: "Qual das seguintes opções descreve melhor a varredura de segredos do GitHub?"  
draft: false  
documentation: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning"
---

- [ ] Um recurso que analisa issues em busca de credenciais não verificadas e as exclui automaticamente.  
> A varredura de segredos não exclui automaticamente nada; ela detecta segredos potencialmente expostos.  
- [ ] Um recurso que criptografa os segredos do seu repositório antes de enviá-los para o GitHub.  
> Os Secrets Criptografados do GitHub Actions lidam com a criptografia, mas isso é diferente da varredura de segredos.  
- [ ] Um recurso que executa gerenciadores de senhas de terceiros no seu código para armazenar segredos com segurança.  
- [x] Um recurso que procura nos repositórios formatos conhecidos de segredos para evitar a exposição acidental de dados sensíveis.  
> **Correto**. A varredura de segredos detecta tokens, chaves e outras credenciais para ajudar a evitar vazamentos.  
