---
question: "¿Cómo puedes utilizar bóvedas de terceros para gestionar secretos en GitHub Actions?"
title: "Pregunta 091"
---

> https://developer.hashicorp.com/vault/docs/platform/github-actions  
> https://bitwarden.com/help/github-actions-integration/  
> https://docs.keeper.io/en/keeperpam/secrets-manager/integrations/github-actions  
1. [x] Almacenar secretos en la bóveda de terceros y usar un paso de descifrado en tu flujo de trabajo para acceder a ellos, con la clave de descifrado almacenada como un secreto de GitHub Actions.  
1. [ ] La integración directa con bóvedas de terceros es compatible de forma nativa dentro de GitHub Actions sin necesidad de ninguna configuración adicional.  
1. [ ] Las bóvedas de terceros deben ser accedidas incrustando sus claves API dentro de los archivos de flujo de trabajo y utilizando la API o CLI de ese proveedor.  
1. [ ] GitHub Actions no admite el uso de bóvedas de terceros para la gestión de secretos; todos los secretos deben almacenarse dentro de GitHub.  
