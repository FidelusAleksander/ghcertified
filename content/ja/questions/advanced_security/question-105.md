---
title: "質問 105"
question: "次のうち有効な `dependabot.yml` 設定ファイルはどれですか？"
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