---
question: "En un perfil de agente personalizado para GitHub Copilot, ¿qué clave de frontmatter YAML de nivel superior se utiliza para declarar los servidores MCP a los que el agente puede acceder?"
documentation: "https://docs.github.com/en/copilot/reference/custom-agents-configuration"
---

- [x] `mcp-servers`
> La clave `mcp-servers` define las configuraciones de los servidores MCP, incluyendo tipo, comando, argumentos, herramientas y variables de entorno.
- [ ] `tools`
> `tools` enumera qué herramientas puede usar el agente, pero no define las configuraciones de los servidores MCP en sí.
- [ ] `servers`
> No existe una clave `servers` en el esquema YAML del agente personalizado.
- [ ] `extensions`
> `extensions` no es una clave válida en el frontmatter del perfil del agente personalizado.
