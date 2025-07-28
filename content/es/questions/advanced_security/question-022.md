---
title: "Pregunta 022"
question: "Tu empresa tiene secretos internos que no deben ser enviados a los GitHub repositories. El patrón de estos secretos no es conocido por GitHub y, por lo tanto, no es detectado por secret scanning. ¿Qué pueden hacer las empresas para proteger a sus desarrolladores de enviar estos secretos accidentalmente a los repositories en su GitHub Organization?"
---


> https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization
1. [x] Definir patrones regex para estos secretos y habilitar patrones personalizados para secret scanning en la organización.
1. [ ] La empresa debe unirse al GitHub partner program para que el patrón de los secretos de la empresa sea reconocido.
> GitHub partner program está destinado a proveedores de servicios que distribuyen secretos fuera de su organización (por ejemplo, proveedores de nube). No está destinado para secretos internos de una sola organización.
1. [ ] Definir GitHub Actions workflows personalizados para los repositories en la organización que escanearán estos secretos.
1. [ ] En todos los repositories incluir un archivo `secret_scanning.yml`, el cual definirá estos secretos personalizados que deben ser escaneados.
> El archivo `secret_scanning.yml` puede ser utilizado para deshabilitar secret scanning en archivos o directorios específicos.
