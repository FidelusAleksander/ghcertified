---
question: „Twoja organizacja definiuje sekret `SomeSecret`, jednak podczas odwoływania się do tego sekretu w ramach workflow za pomocą `${{ secrets.SomeSecret }}` otrzymujesz inną wartość niż oczekiwana. Co może być powodem tego problemu?”
documentation: „https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets”
---

- [x] Sekret `SomeSecret` jest również zadeklarowany w zakresie repozytorium
- [ ] Sekret `SomeSecret` jest również zadeklarowany w zakresie enterprise
> Jeśli sekret o tej samej nazwie istnieje na wielu poziomach, sekret na najniższym poziomie ma pierwszeństwo.
- [ ] Wyrażenie `${{ secrets.SomeSecret }}` jest używane tylko dla sekretów w zakresie repozytorium
- [ ] Musisz użyć GitHub API, aby uzyskać dostęp do sekretów w zakresie organizacji
