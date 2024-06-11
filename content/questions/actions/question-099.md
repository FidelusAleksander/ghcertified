---
question: "What is the recommended approach for storing secrets larger than 48 KB?"
archetype: "questions"
title: "Question 099"
draft: false
---

> https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#limits-for-secrets
1. [ ] avoid storing large secrets entirely to ensure security
1. [ ] secrets larger than 48 KB cannot be stored
1. [x] use a workaround involving encryption with GPG and storing the decryption passphrase as a secret
1. [ ] store large secrets directly as repository secrets to avoid limitations
