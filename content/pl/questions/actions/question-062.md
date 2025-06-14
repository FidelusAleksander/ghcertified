---
question: "Twoja organizacja definiuje sekret `SomeSecret`, jednak gdy odwołujesz się do tego sekretu w workflow za pomocą `${{ secrets.SomeSecret }}`, zwracana jest inna wartość niż oczekiwano. Co może być tego przyczyną?"
title: "Pytanie 062"
---

> https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets
1. [x] Sekret `SomeSecret` jest również zadeklarowany w zakresie repozytorium
1. [ ] Sekret `SomeSecret` jest również zadeklarowany w zakresie przedsiębiorstwa
> Jeśli sekret o tej samej nazwie istnieje na różnych poziomach, sekret na najniższym poziomie ma pierwszeństwo.
1. [ ] Wyrażenie `${{ secrets.SomeSecret }}` jest używane tylko dla sekretów o zakresie repozytorium
1. [ ] Musisz użyć GitHub API, aby uzyskać dostęp do sekretów o zakresie organizacji
