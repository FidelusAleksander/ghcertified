---
question: "¿Cómo se ejecutan scripts personalizados de JavaScript directamente en un workflow de GitHub Actions?"
documentation: "https://github.com/marketplace/actions/github-script"
---

- [x] A través de la acción `actions/github-script`
> `actions/github-script` te permite escribir y utilizar JavaScript en línea para realizar llamadas a la API y acceder al contexto del workflow. Para usar `actions/github-script`, debes llamarlo como cualquier otra acción, como se indica en la [documentación](https://github.com/actions/github-script).
- [ ] Habilitando la configuración 'Allow custom JavaScript scripts' en la configuración de Actions de un repositorio
> No existe una configuración llamada 'Allow custom JavaScript scripts' en la configuración de Actions de un repositorio.
- [ ] Habilitando la configuración 'Allow custom JavaScript scripts' en la configuración de Actions de una organización
> No existe una configuración llamada 'Allow custom JavaScript scripts' en la configuración de Actions de un repositorio. Aunque puede ser necesario habilitar configuraciones como 'Allow actions created by Github' en la configuración de Actions de una organización para usar acciones oficiales de GitHub, esto no está relacionado únicamente con `actions/github-script`.
- [ ] Escribiendo el contenido de un bloque de script en la variable de entorno `GITHUB_SCRIPT`
> `GITHUB_SCRIPT` no es una variable de entorno predeterminada en GitHub Actions. Puedes encontrar una lista de las variables de entorno predeterminadas en la [documentación](https://docs.github.com/en/actions/reference/workflows-and-actions/variables).
- [ ] En una acción de JavaScript, configurar la clave `using` como `'github-script'`
> Las acciones de JavaScript deben tener su clave `using` configurada como `node*`, donde `*` es una versión compatible de Node.js. Por lo general, las acciones de JavaScript no necesitan `actions/github-script`.
