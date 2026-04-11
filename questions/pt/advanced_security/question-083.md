---
title: "Pergunta 083"
question: "Como parte do seu pipeline CI do Jenkins, você criou com sucesso e analisou um banco de dados CodeQL, produzindo assim um arquivo SARIF. Como você pode enviar o arquivo SARIF para o GitHub? (Escolha duas.)"
---


> https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#about-sarif-file-uploads-for-code-scanning
- [x] Usando o comando `codeql github upload-results` do CodeQL CLI
- [x] Usando o endpoint da GitHub REST API `POST /repos/{owner}/{repo}/code-scanning/sarifs`
- [ ] Usando o comando `gh codeql upload-results` do GitHub CLI
- [ ] Ao fazer commit do arquivo SARIF no repositório GitHub
- [ ] Usando o GitHub Action `github/codeql-action/upload-sarif`
> Você não pode usar GitHub Actions em pipelines do Jenkins.
