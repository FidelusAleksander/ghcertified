---
question: "¿Cuál de las siguientes opciones describe mejor el escaneo de secretos de GitHub?"  
draft: false  
documentation: "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
---

- [ ] Una función que analiza los issues en busca de credenciales no verificadas y las elimina automáticamente.  
> El escaneo de secretos no elimina nada automáticamente; detecta secretos potencialmente filtrados.  
- [ ] Una función que cifra los secretos de tu repositorio antes de enviarlos a GitHub.  
> Los secretos cifrados de GitHub Actions manejan el cifrado, pero eso es diferente del escaneo de secretos.  
- [ ] Una función que ejecuta administradores de contraseñas de terceros en tu código para almacenar secretos de forma segura.  
- [x] Una función que busca formatos de secretos conocidos en los repositorios para prevenir la exposición accidental de datos sensibles.  
> **Correcto**. El escaneo de secretos detecta tokens, claves y otras credenciales para ayudar a evitar filtraciones.  
