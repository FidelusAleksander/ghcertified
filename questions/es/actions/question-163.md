---
question: "Annette necesita escribir un flujo de trabajo para publicar un paquete `npm` personalizado que solo los miembros de su organización privada usarán. ¿Qué debería incluir su flujo de trabajo?"
documentation: "https://docs.github.com/en/packages/learn-github-packages/publishing-a-package"
---

- [x] Lógica para publicar en GitHub Packages  
> GitHub Packages es un registro de paquetes integrado con GitHub, lo que lo hace más fácil de usar si tus necesidades están específicamente relacionadas con GitHub (como en el caso de acciones/fluxos de trabajo). GitHub Packages incluye la capacidad de alojar paquetes de forma privada.  
- [x] Un token con permisos de `write:packages`  
> Los tokens de acceso personal son compatibles con todos los registros de GitHub Packages. Algunos registros también admiten el uso de `GITHUB_TOKEN`. Consulta la [documentación](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries) para más información.  
- [x] Lógica de comunicación con el registro correspondiente de GitHub Packages `https://npm.pkg.github.com`  
> Los flujos de trabajo relacionados con GitHub Packages a menudo implican comunicación con el registro de paquetes alojado en GitHub correspondiente, cuya URL tiene la sintaxis de `https://<package-type>.pkg.github.com`. Para un ejemplo, consulta la [documentación del registro de npm](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).  
- [ ] Un evento `on:registry_package` sin tipos de actividad especificados  
> El evento `on:registry_package` está relacionado con paquetes, pero un flujo de trabajo no necesita este evento para publicar un paquete.  
- [ ] Un token con permisos de `admin:packages`  
> Los permisos de `admin:packages` solo son necesarios cuando necesitas eliminar un paquete alojado en GitHub Packages. Se debe seguir el principio de privilegios mínimos; en este caso, solo se necesitan permisos de `write`.  
- [ ] Un evento `on:registry_package` con `types:[published]`  
> El evento `on:registry_package` se puede configurar para que active un flujo de trabajo cuando se publique un paquete, pero un flujo de trabajo no necesita este evento para publicar un paquete.  
