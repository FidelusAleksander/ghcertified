---
title: "Pergunta 077"
question: "Qual é o método mais simples para executar a análise do CodeQL simultaneamente para cada linguagem em um repositório multilíngue usando GitHub Actions?"
---

> https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed
1. [x] Criando uma matriz de `languages` para o job e referenciando-a no parâmetro de entrada `languages` da ação `github/codeql-action/init`
1. [ ] Chamando a ação `github/codeql-action/analyze` em etapas separadas para cada linguagem
1. [ ] Criando um workflow separado para cada linguagem
1. [ ] Definindo o paralelismo na ação `github/codeql-action/analyze`
