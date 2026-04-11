---
title: "Pergunta 105"
question: "Qual das opções a seguir é um arquivo de configuração `dependabot.yml` válido?"
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
