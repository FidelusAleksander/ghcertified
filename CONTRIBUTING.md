# Prerequisites

Before you get started, make sure to install:

- [HUGO](https://gohugo.io/installation/): The static site generator used to build the website.

# Getting Started

To set up and run the quiz website locally on your machine, follow these steps:

1) Fork the repository
2) Update the submodules
   ```bash
   git submodule update --init --recursive

3) Launch the Hugo server
   ```bash
   hugo server -D

It should be available under http://localhost:1313

# Updating the quiz content

All of the questions in this repository are stored in [content/questions](https://github.com/FidelusAleksander/githubcertified/blob/master/content/questions) directory.

## Adding a question
1) Run hugo command to add a new file with auto-generated metadata (frontmatter)
```bash
hugo new questions/actions/question-XXX.md
hugo new questions/admin/question-XXX.md
hugo new questions/advanced_security/question-XXX.md
```

2) Fill the contents of the generated markdown file with a question matching the
 [quizdown-js/syntax](https://github.com/bonartm/quizdown-js/blob/main/docs/syntax.md):

Questions can be of three types:

- **Single choice question**

``` markdown

# Which of the following is true?

> (optional hint) text hint or a link

1. [x] Correct answer
1. [ ] Incorrect answer 1
> (optional) explanation why this is a wrong answer
1. [ ] Incorrect answer 2
> (optional) explanation why this is a wrong answer
```

- **Multi choice question**

``` markdown

# Which components are required for a workflow?

> (optional hint) text hint or a link

- [x] One or more events that will trigger the workflow
- [x] One or more jobs
- [ ] Workflow name
> (optional) explanation why this is a wrong answer
- [ ] Defined branches on which the workflow will run
> (optional) explanation why this is a wrong answer

```

- **Sequence**

``` markdown

## Please bring the following into sequence!

> (optional hint) text hint or a link

1. One
2. Two
3. Three
4. Four
5. Five

```

## Updating/Removing a question
Update the contents of the question or remove the file
