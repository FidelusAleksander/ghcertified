---
title: "Pregunta 016"
question: "¿Cuál es el comportamiento cuando se agrega o actualiza un nuevo patrón de secreto en el programa de socios de escaneo de secretos de GitHub?"
---


> https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#accessing-secret-scanning-alerts
1. [x] GitHub realizará un escaneo de todo el contenido histórico del código en los repositorios públicos con el escaneo de secretos habilitado
1. [ ] GitHub solo buscará el nuevo patrón en los commits recién enviados en los repositorios con el escaneo de secretos habilitado. Si ya había un secreto de ese patrón en el repositorio, no será detectado.
1. [ ] El socio de GitHub debe encargarse de los secretos filtrados históricamente y GitHub solo escaneará los nuevos commits para el nuevo patrón
1. [ ] GitHub creará un issue en todos los repositorios con el escaneo de secretos habilitado para que los mantenedores puedan verificar el repositorio en busca de secretos que coincidan con el nuevo patrón
