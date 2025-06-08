---
question: "Jakie jest zalecane podejście do przechowywania sekretów większych niż 48 KB?"
title: "Pytanie 099"
---

> https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#limits-for-secrets
1. [ ] unikać całkowitego przechowywania dużych sekretów w celu zapewnienia bezpieczeństwa
1. [ ] sekrety większe niż 48 KB nie mogą być przechowywane
1. [x] zaszyfrować i przechowywać sekrety w repozytorium, ale passphrase do deszyfrowania zachować jako sekret
1. [ ] przechowywać duże sekrety bezpośrednio jako sekrety repozytorium, aby uniknąć ograniczeń
