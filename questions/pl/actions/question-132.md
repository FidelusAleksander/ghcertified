---
question: "Które z poniższych stwierdzeń dotyczących GitHub Enterprise Server (GHES) są prawdziwe?"
documentation: "https://docs.github.com/en/enterprise-server@3.21/admin/overview/about-github-enterprise-server"
---

- [x] Domyślnie przepływy pracy GHES nie mają dostępu do GitHub.com ani działań z GitHub Marketplace. 
- [x] `actions/actions-sync` jest głównie przeznaczony do przenoszenia działań z GitHub.com do instancji GHES.
> Synchronizacja działań z GitHub.com jest głównie realizowana za pomocą GitHub Connect lub `actions-sync`. Narzędzie `actions/actions-sync` jest [ręcznym sposobem](https://docs.github.com/en/enterprise-server@3.21/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) wykonania tego procesu. 
- [ ] GHES ma możliwość korzystania z rozszerzonych wersji GitHub-hosted runners.
> GHES w ogóle nie ma dostępu do GitHub-hosted runners. Jest to opisane w [dokumentacji `actions/actions-sync`](https://docs.github.com/en/enterprise-server@3.21/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom).
- [ ] Używając GitHub Connect, użytkownicy mogą skorzystać z ręcznego procesu, aby uzyskać dostęp do działań z GitHub.com. Proces ten musi zostać wykonany dla każdej pożądanej akcji.
> GitHub Connect umożliwia automatyczny dostęp do działań z GitHub.com. Użytkownicy muszą przejść proces konfiguracji, ale zazwyczaj wystarczy go wykonać tylko raz. Szczegóły znajdują się w [dokumentacji GitHub Connect](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#enabling-automatic-access-to-public-githubcom-actions).
- [x] Instancje GitHub Enterprise Server są hostowane lokalnie, w przeciwieństwie do GitHub Enterprise Cloud (GHEC), który jest hostowany i zarządzany przez GitHub.
> [GitHub Enterprise Server](https://docs.github.com/en/enterprise-server@3.21/admin/overview/about-github-enterprise-server) to lokalnie hostowana wersja platformy GitHub. Instancje [GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud) są hostowane na dedykowanej subdomenie GHE.com. Wszystkie subdomeny GHE.com są hostowane przez GitHub.
