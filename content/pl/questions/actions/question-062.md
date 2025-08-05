---
question: "Twoja organizacja definiuje tajemnicę `SomeSecret`, jednak gdy odwołujesz się do tej tajemnicy w workflow za pomocą `${{ secrets.SomeSecret }}`, zwracana jest inna wartość niż oczekiwana. Jaka może być tego przyczyna?"
title: "Pytanie 062"
---

> https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets
1. [x] Tajemnica `SomeSecret` jest również zadeklarowana w zakresie repozytorium
1. [ ] Tajemnica `SomeSecret` jest również zadeklarowana w zakresie enterprise
> Jeśli tajemnica o tej samej nazwie istnieje na wielu poziomach, priorytet ma tajemnica na najniższym poziomie.
1. [ ] Wyrażenie `${{ secrets.SomeSecret }}` jest używane tylko dla tajemnic
