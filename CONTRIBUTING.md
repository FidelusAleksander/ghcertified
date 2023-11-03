# Prerequisites

Before you get started, make sure to install:

- [HUGO](https://gohugo.io/installation/): The static site generator used to build the website.

# Getting Started

To set up and run the quiz website locally on your machine, follow these steps:

1) Fork the repository
2) Update the submodules
   ```bash
   git submodule update --init --recursive
   ```
   
3) Launch the Hugo server
   ```bash
   hugo server -D
   ```

It should be available under http://localhost:1313

# Updating the quiz content

All of the questions in this repository are stored in [content/questions](https://github.com/FidelusAleksander/githubcertified/blob/master/content/questions) directory, each question follows the same naming convention `question-XXX.md` where `XXX` is the question's unique number.

## Adding a question
1) Run hugo command to add a new question file. Change `XXX` to the next available number.
```bash
hugo new questions/actions/question-XXX.md
hugo new questions/admin/question-XXX.md
hugo new questions/advanced_security/question-XXX.md
hugo new questions/foundations/question-XXX.md
```

For example `hugo new questions/actions/question-084.md`

2) Open the newly created file and fill in the question and answers.
