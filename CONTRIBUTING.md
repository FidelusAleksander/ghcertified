# Contributing to ghcertified

>The easiest way to contribute is by [opening an issue](https://github.com/FidelusAleksander/ghcertified/issues/new/choose). No contribution is too small - we encourage you to report any typos, unclear questions or feature requests.


<!-- MarkdownTOC autolink="true" -->
- [Contributing to ghcertified](#contributing-to-ghcertified)
  - [Setting up the project](#setting-up-the-project)
    - [Option 1: GitHub Codespaces](#option-1-github-codespaces)
    - [Option 2: Local setup (traditional)](#option-2-local-setup-traditional)
  - [Content Changes](#content-changes)
    - [Adding new question](#adding-new-question)
    - [Updating existing content](#updating-existing-content)

<!-- /MarkdownTOC -->

## Setting up the project

### Option 1: GitHub Codespaces

A Codespace is an online development environment that runs in the cloud and is powered by Visual Studio Code where all dependencies for developing this project are already setup for you.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/FidelusAleksander/ghcertified)

Once the Codespace installation is complete you can start making [content changes](#content-changes).

Start the dev server to see your changes live at http://localhost:3000

  ```bash
  cd app && npm run dev
  ```

### Option 2: Local setup (traditional)
If you've decided to not use [GitHub Codespaces](https://codespaces.new/FidelusAleksander/ghcertified) but instead want to run the project locally, follow the steps below.
1. [Fork](https://github.com/FidelusAleksander/ghcertified/fork) the repository
2. Install [Node.js](https://nodejs.org/) (see `.node-version` for the recommended version)
3. Install dependencies
  ```bash
  cd app && npm install
  ```
4. Start the dev server to see your changes live at http://localhost:3000
  ```bash
  npm run dev
  ```

## Content Changes
All of the site content in this repository is stored in [questions/](https://github.com/FidelusAleksander/ghcertified/blob/main/questions) directory and is written in markdown.

### Adding new question

> [!warning]
> We do not support the inclusion of questions directly copied from official GitHub certification exams. Please only submit original questions and content that you have created.

1) Create a new markdown file in the appropriate certification directory. Change `XXX` to the next available number.

  - `questions/en/actions/question-XXX.md`
  - `questions/en/admin/question-XXX.md`
  - `questions/en/advanced_security/question-XXX.md`
  - `questions/en/foundations/question-XXX.md`
  - `questions/en/copilot/question-XXX.md`

2) Use the following template for the new file:

```markdown
---
question: "Which GitHub Actions syntax correctly defines a job that runs on Ubuntu?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions"
---

- [x] `runs-on: ubuntu-latest`
- [ ] `os: ubuntu-latest`
- [ ] `platform: ubuntu-latest`
- [ ] `environment: ubuntu-latest`
```

3) Fill in the question and answers.

📖 **[Question Writing Guide](questions/README.md)** — all supported features (code blocks, multi-select, hints), quality guidelines, and examples.


### Updating existing content
If you want to update existing content, simply find the file in the [questions/](https://github.com/FidelusAleksander/ghcertified/blob/main/questions) directory and edit the markdown file.
