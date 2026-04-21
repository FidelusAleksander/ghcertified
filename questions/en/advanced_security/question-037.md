---
question: "What does the default CodeQL analysis setup in GitHub do?"
documentation: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-code-scanning-with-codeql"
---

- [x] Automatically detects languages, selects the default query suite, and configures scan triggers
- [ ] Requires users to select languages and define a custom query suite before scans can run
> A confirmation dialog is shown when enabling default setup, but languages and query suite are automatically pre-selected
- [ ] Analyzes only the repository's primary language using the extended query suite
> Default setup scans all supported languages, not just the primary one, and uses the default query suite
- [ ] Creates a CodeQL workflow file in the repository that must be merged before scanning begins
> This describes the advanced setup, not the default setup
