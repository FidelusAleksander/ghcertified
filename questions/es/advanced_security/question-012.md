---
question: "¿Cuál de estas afirmaciones es verdadera sobre el programa de socios de escaneo de secretos de GitHub?"
documentation: "https://docs.github.com/en/code-security/tutorials/secret-scanning-partner-program"
---

- [x] Es un programa donde los proveedores de servicios pueden proporcionar a GitHub los patrones regex de los secretos que emiten para que el escaneo de secretos de GitHub pueda reconocerlos.
- [x] Cuando GitHub identifica un secreto de un proveedor de servicios asociado, notifica al proveedor sobre el secreto filtrado.
- [x] El socio puede tomar medidas tras recibir la notificación de GitHub sobre un secreto filtrado, como revocar el secreto e informar al propietario del secreto comprometido.
- [ ] Otorga al socio acceso a la API de escaneo de secretos de GitHub para que el proveedor de servicios pueda escanear los repositorios de GitHub en busca de secretos que coincidan con su formato.
> GitHub siempre es responsable de ejecutar el escaneo de secretos, no el socio.
- [ ] GitHub tiene la capacidad de revocar automáticamente secretos filtrados y notificar al proveedor de servicios que han sido invalidados por GitHub.
> GitHub no participa en la revocación de secretos filtrados; el proveedor de servicios tiene la opción de hacerlo.
