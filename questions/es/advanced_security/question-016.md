---
question: "¿Cuál es el comportamiento cuando se agrega o actualiza un nuevo patrón de secreto en el programa de socios de análisis de secretos de GitHub?"
documentation: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#accessing-secret-scanning-alerts"
---

- [x] GitHub realizará un análisis de todo el contenido de código histórico en los repositorios públicos con el análisis de secretos habilitado
- [ ] GitHub solo buscará el nuevo patrón en los commits recién enviados en los repositorios con el análisis de secretos habilitado. Si un secreto de ese patrón ya estaba presente en el repositorio, no será detectado.
- [ ] El socio de GitHub tiene que lidiar con los secretos filtrados históricamente y GitHub solo buscará los nuevos commits para el nuevo patrón
- [ ] GitHub creará un issue en todos los repositorios con el análisis de secretos habilitado para que los mantenedores puedan revisar el repositorio en busca de cualquier secreto que coincida con el nuevo patrón
