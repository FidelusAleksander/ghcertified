---
question: "Annette precisa escrever um workflow para publicar um pacote `npm` personalizado que será usado apenas pelos membros de sua organização privada. O que o workflow dela deve incluir?"
documentation: "https://docs.github.com/en/packages/learn-github-packages/publishing-a-package"
---

- [x] Lógica para publicar no GitHub Packages
> GitHub Packages é um registro de pacotes integrado ao GitHub, facilitando o uso quando suas necessidades são específicas ao GitHub (como com actions/workflows). GitHub Packages inclui a capacidade de hospedar pacotes de forma privada.
- [x] Um token com permissões de `write:packages`
> Tokens de acesso pessoal são compatíveis com todos os registros de pacotes do GitHub Packages. Certos registros também suportam o uso de `GITHUB_TOKEN`. Consulte a [documentação](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries) para mais informações.  
- [x] Lógica de comunicação com o registro correspondente do GitHub Packages `https://npm.pkg.github.com`
> Workflows envolvidos com o GitHub Packages frequentemente envolvem comunicação com o registro de pacotes hospedado no GitHub correspondente, cuja URL tem a sintaxe de `https://<package-type>.pkg.github.com`. Para um exemplo, veja a [documentação sobre o registro npm](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).
- [ ] Um evento `on:registry_package` sem tipos de atividade especificados
> O evento `on:registry_package` está relacionado a pacotes, mas um workflow não precisa desse evento para publicar um pacote.
- [ ] Um token com permissões de `admin:packages`
> Permissões de `admin:packages` só são necessárias quando você precisa excluir um pacote hospedado pelo GitHub Packages. O princípio de permissões mínimas deve ser seguido; nesse caso, apenas permissões de `write` são necessárias.
- [ ] Um evento `on:registry_package` com `types:[published]`
> O evento `on:registry_package` pode ser configurado para acionar um workflow quando um pacote for publicado, mas um workflow não precisa desse evento para publicar um pacote.
