---
question: "Has incluido secretos falsos en tu código de prueba y han sido detectados por el escaneo de secretos de GitHub. ¿Qué puedes hacer para informar a GitHub que estos son secretos falsos utilizados en pruebas y que pueden ser ignorados por el escaneo de secretos?"
documentation: "https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/exclude-folders-and-files"
---

- [x] Creando un archivo `secret_scanning.yml` en el que declares las rutas donde se encuentran los secretos falsos, para que las exploraciones los omitan.
- [x] Cerrando la alerta de escaneo de secretos con la razón de cierre `Used in tests`.
- [ ] En tus archivos de prueba, agrega un comentario `#gh_ignore: fake secret` en la línea donde se encuentra el secreto falso.
- [ ] Creando un archivo `.github/codeql.yml` en el que declares las rutas donde se encuentran los secretos falsos, para que las exploraciones los omitan.
