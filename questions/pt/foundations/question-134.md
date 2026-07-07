---
question: "Qual das opções a seguir descreve melhor o GitHub secret scanning?"  
draft: false  
documentation: "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
---

- [ ] Um recurso que analisa issues em busca de credenciais não verificadas e as exclui automaticamente.  
> O Secret scanning não exclui nada automaticamente; ele detecta segredos potencialmente vazados.  
- [ ] Um recurso que criptografa os segredos do seu repositório antes de enviá-los para o GitHub.  
> Os GitHub Actions Encrypted Secrets lidam com a criptografia, mas isso é diferente do Secret scanning.  
- [ ] Um recurso que executa gerenciadores de senhas de terceiros no seu código para armazenar segredos de forma segura.  
- [x] Um recurso que busca em repositórios formatos conhecidos de segredos para evitar a exposição acidental de dados sensíveis.  
> **Correto**. O Secret scanning detecta tokens, chaves e outras credenciais para ajudar a evitar vazamentos.  
