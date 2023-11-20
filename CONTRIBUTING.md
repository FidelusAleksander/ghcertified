# Contributing to GitHub Certified
> **Warning**: We do not support the inclusion of questions directly copied from official GitHub certification exams. Please only submit original questions and content that you have created.`

The easiest way to contribute is by [opening an issue](https://github.com/FidelusAleksander/githubcertified/issues/new/choose). No contribution is too small - we encourage you to report any typos, unclear questions or feature requests.

<!-- MarkdownTOC autolink="true" -->
- [Contribution process](#contribution-process)
- [Install Hugo](#install-hugo)
- [Content Changes](#content-changes)
  - [Adding new question](#adding-new-question)
  - [Updating existing content](#updating-existing-content)

<!-- /MarkdownTOC -->

## Contribution process
In order to contribute a code/content change:
- [Fork](https://github.com/FidelusAleksander/githubcertified/fork) the repository
- Update the submodules to install the theme
   ```bash
   git submodule update --init --recursive
   ```
- Make your changes
- Submit a pull request

## Install Hugo

Before contributing, ensure you have [Hugo](https://gohugo.io/installation/) installed for local testing.

Make sure that the git submodule in this repository is updated and then launch the Hugo server with:

```bash
hugo server -D
```
Preview your changes at at http://localhost:1313

## Content Changes

All of the content in this repository is stored in [content/](https://github.com/FidelusAleksander/githubcertified/blob/master/content) directory and is written in markdown.


### Adding new question

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
