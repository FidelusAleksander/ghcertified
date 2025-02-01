---
archetype: "questions"
title: "Question 105"
question: "Which of these is a valid `dependabot.yml` configuration file?"
---


> https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file
1. [x] 
    ```yaml 
    version: 2
    updates:
    - package-ecosystem: "npm"
        directory: "/"
        schedule:
          interval: "daily"
    ```
1. [ ] 
    ```yaml 
    version: 2
    config:
    - directory: "/"
        schedule:
          interval: "daily"
    ```
1. [ ] 
    ```yaml 
    version: 2
    updates:
    - package-ecosystem: "npm"
        directory: "/"
        schedule:
          interval: "everyday"
    ```
1. [ ] 
    ```yaml 
    version: 2
    config:
    - package-ecosystem: "npm"
        directory: "/"
        schedule:
          interval: "daily"
    ```
