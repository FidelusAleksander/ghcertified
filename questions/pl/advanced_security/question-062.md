---
question: "Jaki jest efekt dodania słowa kluczowego `paths-ignore` do workflow skanowania kodu w GitHub Actions?"
documentation: "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#avoiding-unnecessary-scans-of-pull-requests"
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
- [x] Unikanie niepotrzebnych skanów, gdy zmieniane są pliki niezwiązane z analizą.
- [ ] Informowanie CodeQL o pominięciu wszystkich plików `*.txt` i `*.md` w analizie. 
- [ ] Zapobieganie uruchamianiu analizy CodeQL dla pull requestów, które zmieniają pliki o określonych rozszerzeniach.
- [ ] Ignorowanie przez sprawdzenia pull requestu wszelkich luk w zabezpieczeniach CodeQL wykrytych w plikach `*.txt` i `*.md`.
