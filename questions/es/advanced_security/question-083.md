---
question: "Como parte de tu canalización de CI de Jenkins, has creado y luego analizado exitosamente una base de datos de CodeQL, produciendo así un archivo SARIF. ¿Cómo puedes subir el archivo SARIF a GitHub?"
documentation: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#about-sarif-file-uploads-for-code-scanning"
---

- [x] Usando el comando `codeql github upload-results` del CodeQL CLI
- [x] Usando el endpoint de GitHub REST API `POST /repos/{owner}/{repo}/code-scanning/sarifs`
- [ ] Usando el comando `gh codeql upload-results` del GitHub CLI
- [ ] Al comprometer el archivo SARIF en el repositorio de GitHub
- [ ] Usando el GitHub Action `github/codeql-action/upload-sarif`
> No puedes usar GitHub Actions en canalizaciones de Jenkins.
