---
question: "¿Puede GitHub Copilot utilizar información semántica de un archivo que está excluido por las exclusiones de contenido de GitHub Copilot?"
documentation: "https://docs.github.com/en/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot#limitations-of-content-exclusions"
---

- [x] Sí, si la información es proporcionada indirectamente por el IDE.
- [ ] No, ignorará toda la información de los archivos excluidos.
> Es posible que Copilot utilice información semántica de un archivo excluido si la información es proporcionada indirectamente por el IDE. Ejemplos de este tipo de contenido incluyen información de tipos y definiciones al pasar el cursor sobre los símbolos utilizados en el código, así como propiedades generales del proyecto como información de configuración de compilación.
