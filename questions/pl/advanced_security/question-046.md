---
question: "Co jest wymagane, aby serwer CI przesyłał wyniki SARIF do GitHub?"
documentation: "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/use-with-existing-ci-system#generating-a-token-for-authentication-with-github"
---

- [x] GitHub App lub token dostępu osobistego z uprawnieniem do zapisu `security_events`.
- [ ] Bezpośrednie połączenie z bazą danych GitHub Advisory Database.
- [ ] Dostęp administratora do GitHub repository.
- [ ] Specjalna wtyczka zainstalowana w systemie CI.
