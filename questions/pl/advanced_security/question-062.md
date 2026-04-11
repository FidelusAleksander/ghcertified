---
title: "Pytanie 062"
question: "Jaki jest efekt dodania słowa kluczowego `paths-ignore` do przepływu pracy GitHub Actions do skanowania kodu?"
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
> https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#avoiding-unnecessary-scans-of-pull-requests
1. [x] Unikanie niepotrzebnych skanowań w przypadku wprowadzania zmian w plikach nieistotnych dla analizy.
1. [ ] Informuje CodeQL, aby pominąć wszystkie pliki `*.txt` i `*.md` w analizie.
1. [ ] Zapobieganie wykonaniu analizy CodeQL na żądaniach ściągnięcia, które wprowadzają zmiany w plikach o określonych rozszerzeniach.
1. [ ] Kontrole żądań ściągnięcia będą ignorować wszelkie podatności CodeQL znalezione w plikach `*.txt` i `*.md`.
