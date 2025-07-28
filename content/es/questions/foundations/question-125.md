---
title: "Pregunta 125"  
question: "¿Qué consulta de búsqueda encuentra todos los issues abiertos etiquetados como `test` que mencionan 'fix' en el texto de su cuerpo?"  
draft: false  
---

> **Más información**: [Searching issues and pull requests](https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests)

1. [ ] `is:pr is:open label:test "fix"`  
1. [ ] `is:issue in:comments label:test "fix"`  
1. [x] `is:issue is:open label:test "fix"`  
1. [ ] `type:issue label:test is:open body:"fix"`
