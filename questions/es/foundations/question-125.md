---
question: "¿Qué consulta de búsqueda encuentra todos los issues abiertos etiquetados como `test` que mencionan 'fix' en el texto de su cuerpo?"  
draft: false  
documentation: "https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests"
---

- [ ] `is:pr is:open label:test "fix"`  
- [ ] `is:issue in:comments label:test "fix"`  
- [x] `is:issue is:open label:test "fix"`  
- [ ] `type:issue label:test is:open body:"fix"`

