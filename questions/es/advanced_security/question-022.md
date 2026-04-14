---
question: "Su empresa tiene secretos internos que no deben ser enviados a los repositorios de GitHub. El patrón de estos secretos no es conocido por GitHub y, por lo tanto, no se detecta mediante el escaneo de secretos. ¿Qué pueden hacer las empresas para proteger a sus desarrolladores de enviar accidentalmente estos secretos a los repositorios en su organización de GitHub?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization"
---

- [x] Definir patrones regex para estos secretos y habilitar patrones personalizados para el escaneo de secretos en la organización.
- [ ] La empresa debe unirse al programa de socios de GitHub para que el patrón de los secretos de la empresa sea reconocido.
> El programa de socios de GitHub está destinado a proveedores de servicios que distribuyen secretos fuera de su organización (por ejemplo, proveedores de nube). No está destinado a secretos internos de una sola organización.
- [ ] Definir flujos de trabajo personalizados de GitHub Actions para los repositorios en la organización que escanearán estos secretos.
- [ ] Incluir en todos los repositorios un archivo `secret_scanning.yml` que definirá estos secretos personalizados que deben ser escaneados.
> El archivo `secret_scanning.yml` puede ser utilizado para desactivar el escaneo de secretos en archivos o directorios específicos.
