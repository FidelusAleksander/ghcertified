---
question: "¿Qué combinación de operadores de búsqueda avanzada usarías para encontrar repositorios públicos con más de 100 estrellas que mencionen 'docker' en su nombre?"  
draft: false  
documentation: "https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories"
---

- [x] `in:name docker stars:>100 is:public`  
> **Correcto**. Esto encontrará todos los repositorios públicos que tienen 'docker' en su nombre y más de 100 estrellas.  
- [ ] `docker in:description stars:<100 is:public`  
- [ ] `is:public name:docker stars:100`  
> Esto no incluye el operador de rango (`>`) para las estrellas, y `name:docker` no es una sintaxis válida.  
- [ ] `topic:docker stars:>100 in:readme`  
> Esto busca dentro de los temas o archivos readme, no en el nombre del repositorio.  
