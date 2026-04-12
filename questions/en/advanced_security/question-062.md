---
question: "What is the effect of adding the `paths-ignore` keyword to your code scanning GitHub Actions workflow?"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#avoiding-unnecessary-scans-of-pull-requests"
---

```yaml
.github/workflows/codeql-analysis.yml

on:
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'

```
- [x] Avoiding unnecessary scans when files that are not relevant to the analysis are changed.
- [ ] It tells CodeQL to omit all `*.txt` and `*.md` files from the analysis. 
- [ ] Preventing the CodeQL analysis from running on pull requests that change files with the specified extensions.
- [ ] Pull request checks will ignore any CodeQL vulnerabilities that are found in `*.txt` and `*.md` files.
