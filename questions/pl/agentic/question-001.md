---
question: "W niestandardowym profilu agenta dla GitHub Copilot, który klucz YAML najwyższego poziomu jest używany do deklarowania serwerów MCP, do których agent może uzyskać dostęp?"
documentation: "https://docs.github.com/en/copilot/reference/custom-agents-configuration"
---

- [x] `mcp-servers`
> Klucz `mcp-servers` definiuje konfiguracje serwerów MCP, w tym typ, polecenie, argumenty, narzędzia i zmienne środowiskowe.
- [ ] `tools`
> Klucz `tools` wskazuje, z których narzędzi agent może korzystać, ale nie definiuje konfiguracji serwerów MCP.
- [ ] `servers`
> Nie istnieje klucz `servers` w schemacie YAML niestandardowego profilu agenta.
- [ ] `extensions`
> Klucz `extensions` nie jest prawidłowym kluczem w frontmatterze niestandardowego profilu agenta.
