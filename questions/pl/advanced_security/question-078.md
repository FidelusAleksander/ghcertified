---
question: "Jak używać niestandardowego pliku konfiguracji CodeQL w ramach GitHub Actions workflow?"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-a-custom-configuration-file"
---

- [x] Poprzez jawne podanie ścieżki do pliku konfiguracji w parametrze wejściowym `config-file` akcji `github/codeql-action/init`
- [ ] Poprzez zapisanie konfiguracji w pliku `.github/codeql/config-config.yml`. Akcja `github/codeql-action/init` automatycznie wykryje plik i go użyje
- [ ] Poprzez przesłanie tego pliku w sekcji Code Scanning na karcie Security w repozytorium
- [ ] Poprzez zapisanie konfiguracji w pliku `.github/workflows/codeql-analysis.yml`. Akcja `github/codeql-action/init` automatycznie wykryje plik i go użyje
