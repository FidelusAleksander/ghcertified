---
question: "Jak można użyć niestandardowego pliku konfiguracyjnego CodeQL w workflowie GitHub Actions?"
documentation: "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#using-a-custom-configuration-file"
---

- [x] Poprzez explicite podanie ścieżki do pliku konfiguracyjnego w parametrze wejściowym `config-file` w akcji `github/codeql-action/init`
- [ ] Poprzez przechowywanie konfiguracji w pliku `.github/codeql/config-config.yml`. Akcja `github/codeql-action/init` automatycznie wykryje ten plik i go użyje
- [ ] Poprzez przesłanie tego pliku w sekcji Code Scanning na karcie Security w repozytorium
- [ ] Poprzez przechowywanie konfiguracji w pliku `.github/workflows/codeql-analysis.yml`. Akcja `github/codeql-action/init` automatycznie wykryje ten plik i go użyje
