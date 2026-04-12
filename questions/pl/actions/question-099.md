---
question: "Jakie jest zalecane podejście do przechowywania sekretów większych niż 48 KB?"
documentation: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#limits-for-secrets"
---

- [ ] unikaj całkowitego przechowywania dużych sekretów w celu zapewnienia bezpieczeństwa
- [ ] sekrety większe niż 48 KB nie mogą być przechowywane
- [x] zaszyfruj i przechowuj sekrety w repository, ale klucz deszyfrujący trzymaj jako sekret
- [ ] przechowuj duże sekrety bezpośrednio jako sekrety repository, aby uniknąć ograniczeń
