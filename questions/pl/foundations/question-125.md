---
title: "Pytanie 125"  
question: "Które zapytanie wyszukiwania znajdzie wszystkie otwarte zgłoszenia oznaczone etykietą `test`, które w treści zawierają słowo 'fix'?"  
draft: false  
---

> **Więcej informacji**: [Wyszukiwanie zgłoszeń i pull requestów](https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests)

1. [ ] `is:pr is:open label:test "fix"`  
1. [ ] `is:issue in:comments label:test "fix"`  
1. [x] `is:issue is:open label:test "fix"`  
1. [ ] `type:issue label:test is:open body:"fix"`
