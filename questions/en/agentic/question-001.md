---
question: "In a custom agent profile for GitHub Copilot, which top-level YAML frontmatter key is used to declare MCP servers that the agent can access?"
documentation: "https://docs.github.com/en/copilot/reference/custom-agents-configuration"
---

- [x] `mcp-servers`
> The `mcp-servers` key defines MCP server configurations including type, command, args, tools, and environment variables.
- [ ] `tools`
> `tools` lists which tools the agent can use, but does not define MCP server configurations itself.
- [ ] `servers`
> There is no `servers` key in the custom agent YAML schema.
- [ ] `extensions`
> `extensions` is not a valid key in the custom agent profile frontmatter.
