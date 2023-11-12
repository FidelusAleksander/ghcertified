# Contributing to GitHub Certified

This repository contains the source code for the [GitHub Certified](https://githubcertified.com) website. 
GitHub Certified is built using [Hugo](https://gohugo.io/) together with [Hugo Relearn Theme](https://github.com/McShelby/hugo-theme-relearn) and is hosted on [GitHub Pages](https://docs.github.com/en/pages).

The easiest way to contribute is by [opening an issue](https://github.com/FidelusAleksander/githubcertified/issues/new/choose). No contribution is too small - we encourage you to report any typos, unclear questions or feature requests.

## The process
In order to contribute a code/content change:
- [Fork](https://github.com/FidelusAleksander/githubcertified/fork) the repository
- Update the submodules
   ```bash
   git submodule update --init --recursive
   ```
- Make your changes
- Submit a pull request


## Content Changes

All of the content in this repository is stored in [content/](https://github.com/FidelusAleksander/githubcertified/blob/master/content) directory and is written in markdown.

For any content changes it's best to install [Hugo](https://gohugo.io/) and run the website locally to see the changes before submitting a pull request.
- [Hugo Installation](https://gohugo.io/installation/): The static site generator used to build the website.

Make sure that the git submodule in this repository is updated and then launch the Hugo server.

```bash
hugo server -D
```
It should be available at http://localhost:1313


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
