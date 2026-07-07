---
question: "¿Cuál es el comportamiento cuando se agrega o actualiza un nuevo patrón de secretos en el programa de socios de análisis de secretos de GitHub?"
documentation: "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning#accessing-secret-scanning-alerts"
---

- [x] GitHub ejecutará un análisis de todo el contenido histórico del código en los repositorios públicos con el análisis de secretos habilitado
- [ ] GitHub solo buscará el nuevo patrón en los commits recién enviados a los repositorios con el análisis de secretos habilitado. Si un secreto de ese patrón ya estaba presente en el repositorio, no será detectado.
- [ ] El socio de GitHub tiene que ocuparse de los secretos filtrados históricamente y GitHub solo analizará los nuevos commits para el nuevo patrón
- [ ] GitHub creará un issue en todos los repositorios con el análisis de secretos habilitado para que los mantenedores puedan verificar el repositorio en busca de secretos que coincidan con el nuevo patrón
