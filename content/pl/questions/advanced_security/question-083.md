---
title: "Pytanie 083"
question: "W ramach swojego potoku CI w Jenkins pomyślnie utworzyłeś i przeanalizowałeś bazę danych CodeQL, co skutkowało wygenerowaniem pliku SARIF. Jak możesz przesłać plik SARIF do GitHub? (Wybierz dwie.)"
---

> https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github#about-sarif-file-uploads-for-code-scanning
- [x] Używając komendy `codeql github upload-results` z CodeQL CLI
- [x] Używając GitHub REST API `POST /repos/{owner}/{repo}/code-scanning/sarifs` endpoint
- [ ] Używając komendy `gh codeql upload-results` z GitHub CLI
- [ ] Poprzez zatwierdzenie (commit) pliku SARIF do repozytorium GitHub
- [ ] Używając GitHub Action `github/codeql-action/upload-sarif`
> Nie możesz używać GitHub Actions w potokach Jenkins.
