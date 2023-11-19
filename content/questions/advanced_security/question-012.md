---
archetype: "questions"
title: "Question 012"
question: "Which of these is true about the GitHub secret scanning partner program? (Choose three.)"
draft: false
---


> https://docs.github.com/en/code-security/secret-scanning/secret-scanning-partner-program
- [x] It is a program where service providers can provide GitHub with the regex patterns of secrets that they issue so GitHub secret scanning can recognize them.
- [x] When GitHub identifies a secret from a partnered service provider, it notifies the service provider about the leaked secret.
- [x] The partner can take actions upon receiving notification from GitHub about a leaked secret, such as revoking the secret and informing the owner of the compromised secret.
- [ ] It grants the partner access to the secret GitHub scanning API so that the service provider can scan GitHub repositories for secrets that match their format.
> GitHub is always responsible for running the secret scanning, not the partner.
- [ ] GitHub has the ability to automatically revoke leaked secrets and notify the service provider that they have been invalidated by GitHub.
> GitHub does not participate in the revocation of leaked secrets; the service provider has the option to do so.
