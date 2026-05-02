---
question: "Które z poniższych stwierdzeń dotyczących GitHub Enterprise Server (GHES) są prawdziwe?"
documentation: "https://docs.github.com/en/enterprise-server/admin/overview/about-github-enterprise-server"
---

- [x] Domyślnie przepływy pracy GHES nie mają dostępu do GitHub.com ani do akcji z GitHub Marketplace. 
- [x] `actions/actions-sync` jest głównie przeznaczone do przenoszenia akcji z GitHub.com do instancji GHES.
> Synchronizacja akcji z GitHub.com jest głównie realizowana za pomocą GitHub Connect lub `actions-sync`. Narzędzie `actions/actions-sync` to [ręczny sposób](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) na przeprowadzenie tego procesu. 
- [ ] GHES ma możliwość korzystania z ulepszonych wersji runnerów hostowanych przez GitHub.
> GHES w ogóle nie ma dostępu do runnerów hostowanych przez GitHub. Jest to opisane w dokumentacji [`actions/actions-sync`](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom).
- [ ] Korzystając z GitHub Connect, użytkownicy mogą ręcznie uzyskać dostęp do akcji z GitHub.com. Proces ten musi być wykonany raz dla każdej wymaganej akcji.
> GitHub Connect umożliwia automatyczny dostęp do akcji z GitHub.com. Użytkownicy muszą przejść przez proces konfiguracji, ale zazwyczaj jest to wymagane tylko raz. Więcej szczegółów można znaleźć w [dokumentacji GitHub Connect](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#enabling-automatic-access-to-public-githubcom-actions).
- [x] Instancje GitHub Enterprise Server są hostowane samodzielnie, w odróżnieniu od GitHub Enterprise Cloud (GHEC), które jest hostowane i zarządzane przez GitHub.
> [GitHub Enterprise Server](https://docs.github.com/en/enterprise-server/admin/overview/about-github-enterprise-server) to samohostowana wersja platformy GitHub. Instancje [GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud) są hostowane na dedykowanej subdomenie GHE.com. Wszystkie subdomeny GHE.com są hostowane przez GitHub.
