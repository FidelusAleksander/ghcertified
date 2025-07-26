# AI Translation Instructions for GitHub Certification Content Files

## Overview
Instructions for translating GitHub certification content files while maintaining technical accuracy and proper formatting.

## File Types
This applies to all content files including:
- Quiz questions (`questions/`)
- Practice test pages (`practice_tests/`)
- Study resources (`study_resources/`)
- Index pages (`_index.md`)

## Frontmatter Structure
Content files use various frontmatter fields:
```markdown
---
title: "Translated title"
question: "Translated question text" (quiz files only)
description: "Translated description"
linkTitle: "Translated link title"
date: 2023-08-19T11:04:05+02:00 (DO NOT TRANSLATE)
draft: false (DO NOT TRANSLATE)
weight: 20 (DO NOT TRANSLATE)
---
```

## Translation Rules

### DO NOT TRANSLATE
- **Frontmatter keys**: `title:`, `question:`, `description:`, `linkTitle:`, `date:`, `draft:`, `weight:`, `type:`
- **Technical values**: `date` timestamps, `draft` boolean, `weight` numbers, `type` values
- **GitHub terminology**: `GitHub Actions`, `pull request`, `commit`, `fork`, `clone`, `workflow`
- **Technical identifiers**: `GITHUB_TOKEN`, `actions/checkout`, file paths, command names
- **Code blocks**: All YAML, JSON, shell commands, variable names
- **Reference URLs**: Links starting with `>`
- **Markdown formatting**: `[x]`, `[ ]`, numbered lists
- **Hugo shortcodes**: `{{< test_cards >}}`, `{{< practice_test >}}`

### TRANSLATE
- Content within quotes for: `title`, `question`, `description`, `linkTitle`
- Body content and markdown text
- Answer option descriptions (in quiz files)
- Headers and regular text content

## Formatting Requirements
- Frontmatter must start/end with `---`
- No trailing spaces after quotes
- Preserve exact code block formatting
- Maintain checkbox syntax: `[x]` correct, `[ ]` incorrect (quiz files)
- Keep Hugo shortcode syntax unchanged
- Preserve date formats and technical values

## Quality Checks
1. No trailing spaces in frontmatter
2. All code blocks and shortcodes preserved exactly
3. GitHub terms remain in English
4. Reference URLs unchanged
5. Technical frontmatter values unchanged (dates, booleans, numbers)
6. Checkbox formatting correct (quiz files only)

## Common Issues to Avoid
- **Trailing spaces** after quotes in frontmatter
- **Mixed languages** in titles (e.g., "Question" with translated numbers)
- **Translated code** blocks, shortcodes, or technical identifiers
- **Modified URLs** or reference links
- **Translated technical values** like dates, draft status, or weights

## Examples

### Quiz File
**English:**
```markdown
---
question: "Which statement is correct regarding passing permissions to reusable workflows?"
title: "Question 001"
---

> https://docs.github.com/en/actions/using-workflows/reusing-workflows#access-and-permissions

1. [x] The `GITHUB_TOKEN` permissions can be only downgraded by the called workflow.
```

**Translated (Polish example):**
```markdown
---
question: "Które stwierdzenie jest poprawne w odniesieniu do przekazywania uprawnień?"
title: "Pytanie 001"
---

> https://docs.github.com/en/actions/using-workflows/reusing-workflows#access-and-permissions

1. [x] Uprawnienia `GITHUB_TOKEN` mogą być obniżone tylko przez workflow wywoływany.
```

### Index File
**English:**
```markdown
---
title: "GitHub Certification Practice Exam"
linkTitle: "Practice Tests"
date: 2023-08-19T11:04:05+02:00
draft: false
weight: 20
---

{{< test_cards >}}
```

**Translated (Polish example):**
```markdown
---
title: "Egzamin praktyczny certyfikacji GitHub"
linkTitle: "Testy praktyczne"
date: 2023-08-19T11:04:05+02:00
draft: false
weight: 20
---

{{< test_cards >}}
```
