---
title: "Pregunta 083"
question: "Como parte de tu pipeline de integración continua en Jenkins, has creado y analizado con éxito una base de datos CodeQL, produciendo así un archivo SARIF. ¿Cómo puedes subir el archivo SARIF a GitHub? (Elige dos)."
---

> https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#about-sarif-file-uploads-for-code-scanning
- [x] Usando el comando `codeql github upload-results` del CodeQL CLI
- [x] Usando el endpoint `POST /repos/{owner}/{repo}/code-scanning/sarifs` de la GitHub REST API
- [ ] Usando el comando `gh codeql upload-results` del GitHub CLI
- [ ] Al comprometer el archivo SARIF en el repositorio de GitHub
- [ ] Usando la GitHub Action `github/codeql-action/upload-sarif`
> No puedes usar GitHub Actions en pipelines de Jenkins.
