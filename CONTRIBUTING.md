# Contributing to ghcertified

> The easiest way to contribute is by [opening an issue](https://github.com/FidelusAleksander/ghcertified/issues/new/choose). No contribution is too small — we encourage you to report typos, unclear questions, or feature requests.

## Add a new question

> [!WARNING]
> We do not support the inclusion of questions directly copied from official GitHub certification exams. Please only submit original questions and content that you have created.

**1. [Fork](https://github.com/FidelusAleksander/ghcertified/fork) the repository** (or use the GitHub web editor).

**2. Create a new file** in the appropriate certification directory.
Pick the certification and name your file `question-XXX.md`, where `XXX` is the next available number:

| Certification | Directory |
| ------------- | --------- |
| Actions | `questions/en/actions/` |
| Admin | `questions/en/admin/` |
| Advanced Security | `questions/en/advanced_security/` |
| Copilot | `questions/en/copilot/` |
| Foundations | `questions/en/foundations/` |

**3. Paste the template below** and replace it with your question and answers:

```markdown
---
question: "Which GitHub Actions syntax correctly defines a job that runs on Ubuntu?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions"
---

- [x] `runs-on: ubuntu-latest`
> (Optional) explanation why this is correct
- [ ] `os: ubuntu-latest`
> (Optional) explanation why this is wrong
- [ ] Github Actions can't run on Ubuntu. Jobs always run on Windows Server machines
- [ ] `environment: ubuntu-latest`
```

- `question` — your question text (required)
- `documentation` — link to relevant GitHub docs (optional)
- `[x]` — correct answer(s), `[ ]` — incorrect answers


That's all! 🎉 The [Question Writing Guide](questions/README.md) covers advanced features like code blocks, multi-select, answer explanations, and quality tips.


**4. Open a pull request.**


## Edit an existing question

Find the file in the [questions/en/](https://github.com/FidelusAleksander/ghcertified/blob/main/questions/en) directory and edit the Markdown directly.

## Running the project

Setting up the dev environment is **only needed if you want to work on the website itself** (components, styling, pages). It is not required for adding or editing questions.

### GitHub Codespaces

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/FidelusAleksander/ghcertified)

Once the Codespace is ready, start the dev server:

```bash
cd app && npm run dev
```

### Local setup

1. [Fork](https://github.com/FidelusAleksander/ghcertified/fork) the repository
2. Install [Node.js](https://nodejs.org/) (see `.node-version` for the recommended version)
3. Install dependencies and start the dev server:
   ```bash
   cd app && npm install
   npm run dev
   ```

The site will be available at http://localhost:3000.
