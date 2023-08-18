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
Currently all questions are in one [content/_index.md](https://github.com/FidelusAleksander/github-actions-quiz/blob/master/content/_index.md) file.

Questions can be of three types [quizdown-js/syntax](https://github.com/bonartm/quizdown-js/blob/main/docs/syntax.md):
- Single Choice
- Multi Choice
- Sequence
