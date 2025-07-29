---
question: "Qual é a abordagem recomendada para armazenar segredos maiores que 48 KB?"
title: "Questão 099"
---

> https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#limits-for-secrets
1. [ ] evitar armazenar segredos grandes completamente para garantir a segurança
1. [ ] segredos maiores que 48 KB não podem ser armazenados
1. [x] criptografar e armazenar segredos no repositório, mas manter a frase de descriptografia como um segredo
1. [ ] armazenar segredos grandes diretamente como segredos do repositório para evitar limitações
