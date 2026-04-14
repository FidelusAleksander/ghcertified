---
question: "Has incluido algunos secretos falsos en tu código de prueba y han sido detectados por el escaneo de secretos de GitHub. ¿Qué puedes hacer para indicar a GitHub que estos son secretos falsos utilizados en pruebas y que pueden ser ignorados por el escaneo de secretos?"
documentation: "https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/excluding-folders-and-files-from-secret-scanning"
---

- [x] Creando un archivo `secret_scanning.yml` dentro del cual declares las rutas donde están ubicados los secretos falsos, para que sean omitidos en los escaneos
- [x] Cerrando la alerta de escaneo de secretos con la razón de cierre `Used in tests`
- [ ] En tus archivos de prueba, añade un comentario `#gh_ignore: fake secret` en la línea donde se encuentra el secreto falso.
- [ ] Creando un archivo `.github/codeql.yml` dentro del cual declares las rutas donde están ubicados los secretos falsos, para que sean omitidos en los escaneos
