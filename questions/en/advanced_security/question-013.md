---
question: "How can you exclude certain directories or files from secret scanning?"
documentation: "https://docs.github.com/en/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories#excluding-directories-from-secret-scanning-alerts-for-users"
---

- [x] By creating a `secret_scanning.yml` file and including paths that should not be scanned
- [ ] It's not possible to exclude specific files and/or directories from being scanned. Once you enable secret scanning for a repository, all files and directories will be scanned.
- [ ] Include these files in the `.gitignore` file
- [ ] By creating a `dependabot.yml` file and including paths which should not be scanned
