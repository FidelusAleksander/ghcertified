---
question: "Qual é a abordagem recomendada para armazenar segredos maiores que 48 KB?"
documentation: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#limits-for-secrets"
---

- [ ] evitar armazenar segredos grandes completamente para garantir a segurança
- [ ] segredos maiores que 48 KB não podem ser armazenados
- [x] criptografar e armazenar segredos no repositório, mas manter a frase de descriptografia como um segredo
- [ ] armazenar segredos grandes diretamente como segredos do repositório para evitar limitações

