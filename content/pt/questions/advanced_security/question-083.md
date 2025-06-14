---
title: "Question 083"
question: "Como parte do seu pipeline Jenkins CI, você criou com sucesso e depois analisou um banco de dados CodeQL, produzindo assim um arquivo SARIF. Como você pode fazer o upload do arquivo SARIF para o GitHub? (Escolha duas.)"
---

> https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#about-sarif-file-uploads-for-code-scanning
- [x] Usando o comando `codeql github upload-results` da CodeQL CLI
- [x] Usando o endpoint `POST /repos/{owner}/{repo}/code-scanning/sarifs` da GitHub REST API
- [ ] Usando o comando `gh codeql upload-results` da GitHub CLI
- [ ] Ao fazer commit do arquivo SARIF no repositório do GitHub
- [ ] Usando o GitHub Action `github/codeql-action/upload-sarif`
> Você não pode usar GitHub Actions em pipelines Jenkins.
