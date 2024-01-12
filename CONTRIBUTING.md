# Contributing to GitHub Certified

>The easiest way to contribute is by [opening an issue](https://github.com/FidelusAleksander/githubcertified/issues/new/choose). No contribution is too small - we encourage you to report any typos, unclear questions or feature requests.


<!-- MarkdownTOC autolink="true" -->
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

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/FidelusAleksander/githubcertified)

Once the Codespace installation is complete and you can go to forward port tab to see the link to the website running locally and start making [content changes](#content-changes).

### Option 2: Local setup (traditional)
If You've decided to not use [GitHub Codespaces](https://codespaces.new/FidelusAleksander/githubcertified) but instead want to run the project locally, follow the steps below.
- [Fork](https://github.com/FidelusAleksander/githubcertified/fork) the repository
- Install [Hugo](https://gohugo.io/installation/)
- Update the submodules to install the theme used in this project
   ```bash
   git submodule update --init --recursive
   ```
- Start the Hugo server to see your changes live at http://localhost:1313
  ```bash
  hugo server
  ```

## Content Changes
All of the site content in this repository is stored in [content/](https://github.com/FidelusAleksander/githubcertified/blob/master/content) directory and is written in markdown.

### Adding new question

> **Warning**: We do not support the inclusion of questions directly copied from official GitHub certification exams. Please only submit original questions and content that you have created.`

1) Run one of the following commands to add a new question file. Change `XXX` to the next available number.

```bash
hugo new questions/actions/question-XXX.md
hugo new questions/admin/question-XXX.md
hugo new questions/advanced_security/question-XXX.md
hugo new questions/foundations/question-XXX.md
```

For example `hugo new questions/actions/question-084.md`

2) Open the newly created file and fill in the question and answers.


### Updating existing content
If You want to update existing content, simply find the file in the [content/](https://github.com/FidelusAleksander/githubcertified/blob/master/content) directory and edit the markdown file.
