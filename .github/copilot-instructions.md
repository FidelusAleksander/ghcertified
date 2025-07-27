This repository contains a quiz application for GitHub certification exam preparation built with Hugo static site generator. Here's how it works:

## Repository Structure
- Questions are stored as Markdown files in `content/questions/` organized by certification type (actions, admin, advanced_security, foundations, copilot)
- Content is organized into multiple language directories, but we **only edit content in the `content/en/` directory**. Other language directories are maintained by an external process and should never be modified directly.
- The site layout and rendering logic is in the `layouts/` as well as in the `themes/hugo-theme-relearn/` directory
- Static assets like CSS and images are in `static/`

## Quiz Rendering
The application uses Quizdown.js for rendering interactive quizzes:
- `layouts/partials/quizdown.html` initializes the quiz UI
- `layouts/questions/views/article.html` renders individual questions
- `layouts/shortcodes/practice_test.html` combines questions into practice tests
- `layouts/partials/question.html` formats question content

## Key Functionality
- Questions can be rendered individually at `/questions/` or more importantly, as practice tests at `/practice_tests/`
- The `/practice_tests/` page displays interactive cards for each certification exam to start a practice test

## Running Locally
- Start the Hugo development server:
  ```bash
  hugo server
  ```
- Access the application at `http://localhost:1313`
- The development server provides live reload for instant preview of changes

## Theme
This site uses the [Hugo Relearn Theme](https://github.com/McShelby/hugo-theme-relearn), a feature-rich documentation theme:
The theme is available as a git [submodule](/themes/hugo-theme-relearn) with documentation in the `themes/hugo-theme-relearn/docs` directory.
