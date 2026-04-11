---
title: "Pregunta 108"
question: "¿Cuál es uno de los principales beneficios de usar un Token de Acceso Personal (PAT) en lugar de un nombre de usuario y contraseña estándar para la autenticación en GitHub?"
---


> https://learn.microsoft.com/en-us/training/modules/github-introduction-administration/3-how-github-authentication-works
1. [ ] Los PATs pueden ser gestionados por la organización y la empresa.
> Los PAT, como su nombre indica, son personales. Las organizaciones y empresas pueden gestionar otras formas de autenticación, como LDAP, SAML y claves SSH.
1. [ ] El PAT es una capa extra de seguridad utilizada al iniciar sesión en sitios web o aplicaciones. Con PAT, los usuarios deben iniciar sesión con su nombre de usuario y contraseña y proporcionar otra forma de autenticación a la que solo ellos tienen acceso.
> Esto es una descripción de la autenticación multifactor o de dos factores.
1. [x] El PAT se puede usar para la autenticación en GitHub cuando se utiliza la API de GitHub o la línea de comandos. Los usuarios generan un token a través de la opción de configuración de GitHub y asocian los permisos del token a un repositorio u organización.
1. [ ] El PAT te permite autenticar GitHub Enterprise Server con tus cuentas existentes y gestionar centralmente el acceso a los repositorios. 
> Esto es una descripción de los beneficios de LDAP para GitHub, no del PAT.
