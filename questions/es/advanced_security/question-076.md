---
question: "¿Qué Actions debes usar al ejecutar análisis de CodeQL en GitHub Actions?"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#about-the-codeql-analysis-workflow-and-compiled-languages"
---

- [x] `github/codeql-action/init`
- [x] `github/codeql-action/analyze`
- [x] `github/codeql-action/autobuild` solo para lenguajes de programación compilados
- [ ] `github/codeql-action/autobuild`
- [ ] `github/codeql-action/init` solo para lenguajes de programación compilados
- [ ] `github/codeql-action/analyze` solo para lenguajes de programación interpretados
