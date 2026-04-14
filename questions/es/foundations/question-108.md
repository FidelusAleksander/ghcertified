---
question: "¿Cuál es uno de los principales beneficios de utilizar un Personal Access Token (PAT) en lugar de un nombre de usuario y contraseña estándar para la autenticación en GitHub?"
documentation: "https://learn.microsoft.com/en-us/training/modules/github-introduction-administration/3-how-github-authentication-works"
---

- [ ] Los PAT pueden ser gestionados por la organización y la empresa.
> Los PAT, como su nombre lo indica, son personales. Las organizaciones y empresas pueden gestionar otras formas de autenticación, como LDAP, SAML y claves SSH.
- [ ] El PAT es una capa adicional de seguridad utilizada al iniciar sesión en sitios web o aplicaciones. Con PAT, los usuarios tienen que iniciar sesión con su nombre de usuario y contraseña y proporcionar otra forma de autenticación a la que solo ellos tienen acceso.
> Esta es una descripción de la autenticación multifactorial o de dos factores.
- [x] El PAT puede ser utilizado para la autenticación en GitHub al usar la GitHub API o la línea de comandos. Los usuarios generan un token a través de la opción de configuración de GitHub y vinculan los permisos del token a un repository o organización. 
- [ ] El PAT te permite autenticar GitHub Enterprise Server contra tus cuentas existentes y gestionar centralmente el acceso al repository.
> Esta es una descripción de los beneficios de LDAP para GitHub, no de PAT.
