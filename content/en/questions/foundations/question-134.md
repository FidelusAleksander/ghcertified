---
title: "Question 134"  
question: "Which of the following best describes GitHub secret scanning?"  
draft: false  
---

> **More info**: [About secret scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)

1. [ ] A feature that scans pull requests for security vulnerabilities before they are merged.  
  > Secret scanning focuses on detecting leaked secrets in repository content, not general security vulnerabilities.  
1. [ ] A feature that encrypts your repository secrets before pushing them to GitHub.  
  > GitHub Actions Encrypted Secrets handle encryption, but that’s different from secret scanning.  
1. [ ] A feature that runs third-party password managers on your code to store secrets securely.  
1. [x] A feature that searches repositories for known secret formats to prevent accidental exposure of sensitive data.  
  > **Correct**. Secret scanning detects tokens, keys, and other credentials to help avoid leaks.  
