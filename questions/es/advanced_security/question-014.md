---
title: "Pregunta 014"
question: "Has incluido algunos secretos falsos en tu código de prueba y han sido detectados por el escaneo de secretos de GitHub. ¿Qué puedes hacer para indicarle a GitHub que estos son secretos falsos usados en pruebas y que pueden ser ignorados por el escaneo de secretos? (Elige dos.)"
---

> https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/excluding-folders-and-files-from-secret-scanning
- [x] Crear un archivo `secret_scanning.yml` en el cual declares las rutas donde se encuentran los secretos falsos, para que los escaneos los omitan.
- [x] Cerrar la alerta de Secret Scanning con la razón de cierre `Used in tests`.
- [ ] En tus archivos de prueba, agregar un comentario `#gh_ignore: fake secret` en la línea donde se encuentra el secreto falso.
- [ ] Crear un archivo `.github/codeql.yml` en el cual declares las rutas donde se encuentran los secretos falsos, para que los escaneos los omitan.
