---
question: "What is the recommended approach for storing secrets larger than 48 KB?"
documentation: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#limits-for-secrets"
---

- [ ] avoid storing large secrets entirely to ensure security
- [ ] secrets larger than 48 KB cannot be stored
- [x] encrypt and store secrets in the repository but keep the decryption passphrase as a secret
- [ ] store large secrets directly as repository secrets to avoid limitations
