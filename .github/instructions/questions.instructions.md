---
description: "Instructions on how to write and structure questions for the GitHub certification exams"
applyTo: "questions/en/**/*.md"
---

# GitHub Certification Questions Writing Guide

This document provides comprehensive guidelines for creating high-quality questions for GitHub certification exam preparation.

## File Structure and Naming

### File Organization
- Each question must be in an individual Markdown file
- File naming convention: `question-XXX.md` where `XXX` is a zero-padded 3-digit number
- Place files in the appropriate certification directory:
  - `questions/en/actions/` - GitHub Actions certification
  - `questions/en/admin/` - GitHub Administration certification
  - `questions/en/advanced_security/` - GitHub Advanced Security certification
  - `questions/en/copilot/` - GitHub Copilot certification
  - `questions/en/foundations/` - GitHub Foundations certification

### File Structure
Each question file must follow the structure shown in the examples below.

The question can be either single choice or multiple choice.

Each question should have 2-6 answer options


### Content Guidelines 

#### ❌ Don't Do This
- Questions with multiple correct interpretations
- Overly complex scenarios that test multiple concepts
- Trick questions with misleading wording
- Options that are clearly joke answers
- Usage of "All of the above" or "None of the above"

#### ✅ Do This Instead
- Clear, specific questions with one objective
- Simple scenarios that illustrate the concept
- Current, well-documented GitHub features
- Straightforward language that tests knowledge
- Plausible incorrect options that represent common misconceptions


### Documentation References
Include relevant documentation links as hints, prefer official GitHub documentation:

```markdown
> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions
```


## Examples

### Good Single Choice Question
```markdown
---
title: "Question 042"
question: "Which GitHub Actions syntax correctly defines a job that runs on Ubuntu?"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on

1. [x] `runs-on: ubuntu-latest`
1. [ ] `os: ubuntu-latest`
1. [ ] `platform: ubuntu-latest`
1. [ ] `environment: ubuntu-latest`
```

### Good Multiple Choice Question
```markdown
---
title: "Question 043"
question: "Which statements about GitHub repository permissions are true?"
---


> https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository
- [x] Read permission allows viewing repository content
- [x] Write permission allows pushing commits to the repository
- [ ] Admin permission is required to view private repositories
- [ ] Triage permission allows deleting the repository
```


