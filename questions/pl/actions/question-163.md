---
question: "Annette musi napisać workflow do publikowania niestandardowej paczki `npm`, z której będą korzystać tylko członkowie jej prywatnej organizacji. Co powinno znaleźć się w jej workflow?"
documentation: "https://docs.github.com/en/packages/learn-github-packages/publishing-a-package"
---

- [x] Logika publikacji do GitHub Packages
> GitHub Packages to rejestr pakietów zintegrowany z GitHub, co ułatwia jego użycie, jeśli Twoje potrzeby są specyficzne dla GitHuba (na przykład w przypadku actions/workflows). GitHub Packages umożliwia hostowanie pakietów prywatnych.
- [x] Token z uprawnieniami `write:packages` 
> Tokeny dostępu osobistego są obsługiwane we wszystkich rejestrach GitHub Packages. Niektóre rejestry obsługują również użycie `GITHUB_TOKEN`. Zobacz [dokumentację](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries), aby uzyskać więcej informacji.  
- [x] Logika komunikacji z odpowiednim rejestrem GitHub Packages `https://npm.pkg.github.com`
> Workflows związane z GitHub Packages często obejmują komunikację z odpowiednim rejestrem pakietów hostowanym przez GitHub, którego adres URL ma składnię `https://<package-type>.pkg.github.com`. Aby zobaczyć przykład, zapoznaj się z [dokumentacją rejestru npm](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).
- [ ] Zdarzenie `on:registry_package` bez określonych typów aktywności
> Zdarzenie `on:registry_package` jest związane z pakietami, ale workflow nie potrzebuje tego zdarzenia do publikowania pakietu.
- [ ] Token z uprawnieniami `admin:packages`
> Uprawnienia `admin:packages` są potrzebne tylko wtedy, gdy chcesz usunąć pakiet hostowany przez GitHub Packages. Należy kierować się zasadą minimalnych uprawnień; w tym przypadku potrzebne są jedynie uprawnienia `write`.
- [ ] Zdarzenie `on:registry_package` z `types:[published]`
> Zdarzenie `on:registry_package` może być skonfigurowane do uruchamiania workflow, gdy pakiet zostanie opublikowany, ale workflow nie potrzebuje tego zdarzenia do publikowania pakietu.
