---
question: "Jakie jest działanie dodania słowa kluczowego `paths-ignore` do przepływu pracy skanowania kodu GitHub Actions?"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#avoiding-unnecessary-scans-of-pull-requests"
---

```yaml
.github/workflows/codeql-analysis.yml

on:
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'

```
- [x] Unikanie niepotrzebnych skanów w przypadku zmiany plików, które nie są istotne dla analizy.
- [ ] Informuje CodeQL, aby pominąć wszystkie pliki `*.txt` i `*.md` w analizie. 
- [ ] Zapobieganie uruchamianiu analizy CodeQL w przypadku pull requestów zmieniających pliki o określonych rozszerzeniach.
- [ ] Kontrole pull requestów ignorują wszelkie podatności CodeQL znalezione w plikach `*.txt` i `*.md`.
