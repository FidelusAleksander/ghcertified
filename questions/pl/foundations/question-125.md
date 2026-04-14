---
question: "Które zapytanie wyszukiwania znajdzie wszystkie otwarte Issues oznaczone etykietą `test`, które zawierają słowo 'fix' w treści?"  
draft: false  
documentation: "https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests"
---

- [ ] `is:pr is:open label:test "fix"`  
- [ ] `is:issue in:comments label:test "fix"`  
- [x] `is:issue is:open label:test "fix"`  
- [ ] `type:issue label:test is:open body:"fix"`
