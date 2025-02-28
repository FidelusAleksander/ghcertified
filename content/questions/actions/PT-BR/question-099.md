---
question: "Qual é a abordagem recomendada para armazenar secrets maiores que 48 KB?"
archetype: "questions"
title: "Questão 099"
---

> https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#limits-for-secrets
1. [ ] evitar armazenar secrets grandes inteiramente para garantir a segurança
1. [ ] secrets maiores que 48 KB não podem ser armazenados
1. [x] criptografar e armazenar secrets no repositório, mas manter a frase de descriptografia como um secret
1. [ ] armazenar secrets grandes diretamente como secrets do repositório para evitar limitações
