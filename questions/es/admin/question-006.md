---
question: "¿Cuál de los siguientes es el procedimiento correcto para generar un paquete de soporte en GitHub Enterprise Server?"
documentation: "https://docs.github.com/en/enterprise-server@3.15/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles"
---

- [x] Navega a tu instancia de GitHub Enterprise Server, selecciona la página de `Site admin`, luego `Management Console`. Elige `Support` en la barra de navegación superior y haz clic en `Download support bundle`.
- [x] Genera y descarga un paquete de soporte directamente en tu máquina local mediante SSH utilizando el comando CLI `ghe-support-bundle -o > support-bundle.tgz`.
- [ ] Primero, accede a los `Settings` en tu cuenta de empresa, haz clic en `License` y, bajo `GitHub Enterprise Help`, selecciona `Upload a support bundle`. Esto generará y descargará automáticamente el paquete de soporte.
- [ ] Haz clic en tu perfil, luego en `Enterprises`. En la barra lateral de la cuenta empresarial, selecciona `Settings` y, bajo `License`, haz clic en `Generate a support bundle`. Esto creará y descargará el paquete.
