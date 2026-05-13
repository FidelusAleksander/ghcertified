---
question: "GitHub Copilot のカスタムエージェントプロファイルでは、エージェントがアクセスできる MCP サーバーを宣言するために使用されるトップレベルの YAML フロントマターキーはどれですか？"
documentation: "https://docs.github.com/en/copilot/reference/custom-agents-configuration"
---

- [x] `mcp-servers`
> `mcp-servers` キーは、タイプ、コマンド、引数、ツール、環境変数を含む MCP サーバーの構成を定義します。
- [ ] `tools`
> `tools` はエージェントが使用できるツールをリストアップしますが、MCP サーバーの構成を定義するものではありません。
- [ ] `servers`
> カスタムエージェントの YAML スキーマに `servers` キーは存在しません。
- [ ] `extensions`
> `extensions` はカスタムエージェントプロファイルのフロントマターで有効なキーではありません。
