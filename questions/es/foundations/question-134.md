---
title: "Pregunta 134"  
question: "¿Cuál de las siguientes opciones describe mejor la exploración de secretos en GitHub?"  
draft: false  
---

> **Más información**: [Acerca de la exploración de secretos](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)

1. [ ] Una función que analiza issues en busca de credenciales no verificadas y las elimina automáticamente.  
  > La exploración de secretos no elimina nada automáticamente; detecta posibles secretos filtrados.  
1. [ ] Una función que cifra los secretos de tu repository antes de enviarlos a GitHub.  
  > GitHub Actions Encrypted Secrets maneja el cifrado, pero eso es diferente de la exploración de secretos.  
1. [ ] Una función que ejecuta administradores de contraseñas de terceros en tu código para almacenar secretos de forma segura.  
1. [x] Una función que busca formatos de secretos conocidos en los repositories para prevenir la exposición accidental de datos sensibles.  
  > **Correcto**. La exploración de secretos detecta tokens, claves y otras credenciales para ayudar a evitar filtraciones.  
