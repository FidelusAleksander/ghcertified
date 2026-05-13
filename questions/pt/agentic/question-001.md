---
question: "Em um perfil de agente personalizado para o GitHub Copilot, qual chave de frontmatter YAML de nível superior é usada para declarar servidores MCP que o agente pode acessar?"
documentation: "https://docs.github.com/en/copilot/reference/custom-agents-configuration"
---

- [x] `mcp-servers`
> A chave `mcp-servers` define configurações de servidores MCP, incluindo tipo, comando, argumentos, ferramentas e variáveis de ambiente.
- [ ] `tools`
> `tools` lista quais ferramentas o agente pode usar, mas não define configurações de servidores MCP.
- [ ] `servers`
> Não existe uma chave `servers` no esquema YAML de perfil de agente personalizado.
- [ ] `extensions`
> `extensions` não é uma chave válida no frontmatter do perfil de agente personalizado.
