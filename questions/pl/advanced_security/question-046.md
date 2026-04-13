---
question: "Co jest wymagane, aby serwer CI przesyłał wyniki SARIF do GitHub?"
documentation: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system#generating-a-token-for-authentication-with-github"
---

- [x] GitHub App lub osobisty token dostępu z uprawnieniem zapisu `security_events`.
- [ ] Bezpośrednie połączenie z GitHub Advisory Database.
- [ ] Dostęp administratora do repozytorium GitHub.
- [ ] Specjalna wtyczka zainstalowana w systemie CI.
