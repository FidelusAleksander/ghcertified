---
question: "W ramach swojego pipelines CI w Jenkinsie, pomyślnie utworzyłeś i przeanalizowałeś bazę danych CodeQL, co w rezultacie wygenerowało plik SARIF. Jak można przesłać plik SARIF do GitHub?"
documentation: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#about-sarif-file-uploads-for-code-scanning"
---

- [x] Używając polecenia `codeql github upload-results` z CodeQL CLI
- [x] Używając endpointu GitHub REST API `POST /repos/{owner}/{repo}/code-scanning/sarifs`
- [ ] Używając polecenia `gh codeql upload-results` z GitHub CLI
- [ ] Przez zatwierdzenie pliku SARIF do repozytorium GitHub
- [ ] Używając GitHub Action `github/codeql-action/upload-sarif`
> Nie można używać GitHub Actions w pipelines Jenkinsie.
