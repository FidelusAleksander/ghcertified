---
question: "Which of the following best describes GitHub secret scanning?"  
draft: false  
documentation: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning"
---

- [ ] A feature that scans issues for unverified credentials and deletes them automatically.  
> Secret scanning doesn't automatically delete anything; it detects potentially leaked secrets.  
- [ ] A feature that encrypts your repository secrets before pushing them to GitHub.  
> GitHub Actions Encrypted Secrets handle encryption, but that’s different from secret scanning.  
- [ ] A feature that runs third-party password managers on your code to store secrets securely.  
- [x] A feature that searches repositories for known secret formats to prevent accidental exposure of sensitive data.  
> **Correct**. Secret scanning detects tokens, keys, and other credentials to help avoid leaks.  
