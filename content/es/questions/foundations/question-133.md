---
title: "Pregunta 133"  
question: "¿Qué combinación de operadores de búsqueda avanzada usarías para encontrar repositorios públicos con más de 100 estrellas que mencionen 'docker' en su nombre?"  
draft: false  
---

> **Más información**: [Búsqueda de repositorios](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)

1. [x] `in:name docker stars:>100 is:public`  
  > **Correcto**. Esto encontrará todos los repositorios públicos que tienen 'docker' en su nombre y más de 100 estrellas.  
1. [ ] `docker in:description stars:<100 is:public`  
1. [ ] `is:public name:docker stars:100`  
  > Falta el operador de rango (`>`) para las estrellas, y `name:docker` no es una sintaxis válida.  
1. [ ] `topic:docker stars:>100 in:readme`  
  > Esto busca dentro de los temas o readmes, no en el nombre del repositorio.  
