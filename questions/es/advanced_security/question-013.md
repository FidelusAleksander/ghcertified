---
question: "¿Cómo puedes excluir ciertos directorios o archivos del análisis de secretos?"
documentation: "https://docs.github.com/en/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories#excluding-directories-from-secret-scanning-alerts-for-users"
---

- [x] Creando un archivo `secret_scanning.yml` e incluyendo las rutas que no deben ser analizadas
- [ ] No es posible excluir archivos y/o directorios específicos del análisis. Una vez que habilitas el análisis de secretos para un repository, todos los archivos y directorios serán analizados.
- [ ] Incluyendo estos archivos en el archivo `.gitignore`
- [ ] Creando un archivo `dependabot.yml` e incluyendo las rutas que no deben ser analizadas
