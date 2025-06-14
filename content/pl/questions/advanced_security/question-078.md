---
title: "Pytanie 078"
question: "W jaki sposób można użyć niestandardowego pliku konfiguracyjnego CodeQL w przepływie pracy GitHub Actions?"
---


> https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-a-custom-configuration-file
1. [x] Poprzez jawne podanie ścieżki do pliku konfiguracyjnego w parametrze wejściowym `config-file` akcji `github/codeql-action/init`
1. [ ] Poprzez zapisanie konfiguracji w pliku `.github/codeql/config-config.yml`. Akcja `github/codeql-action/init` automatycznie wykryje plik i go użyje
1. [ ] Poprzez przesłanie tego pliku w sekcji Code Scanning zakładki Security w repozytorium
1. [ ] Poprzez zapisanie konfiguracji w pliku `.github/workflows/codeql-analysis.yml`. Akcja `github/codeql-action/init` automatycznie wykryje plik i go użyje
