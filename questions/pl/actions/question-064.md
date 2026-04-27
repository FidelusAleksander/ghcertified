---
question: "W jaki sposób organizacje korzystające z GitHub Enterprise Server mogą włączyć automatyczną synchronizację zewnętrznych GitHub Actions hostowanych na GitHub.com ze swoją instancją GitHub Enterprise Server?"
documentation: "https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect"
---

- [x] Korzystając z GitHub Connect
> Po włączeniu, GitHub Connect będzie używany do automatycznego ustanowienia bezpiecznego połączenia między instancją GitHub Enterprise Server (GHES) a kontem GitHub Enterprise Cloud (GHEC) (GHEC jest hostowany na GitHub.com). Konto GHEC pełni rolę zaufanej (uwierzytelnionej) tożsamości, którą GitHub.com wykorzystuje do autoryzacji instancji GHES w celu uzyskania dostępu do akcji hostowanych na GitHub.com.   
- [ ] GitHub Enterprise Server domyślnie ma dostęp do wszystkich GitHub.com Actions
> GitHub Actions na GitHub Enterprise Server zostało zaprojektowane do pracy w środowiskach bez pełnego dostępu do internetu. Domyślnie workflowy nie mogą korzystać z akcji z GitHub.com ani z GitHub Marketplace.
- [ ] Korzystając z narzędzia actions-sync
> Chociaż narzędzie actions-sync można używać do synchronizowania poszczególnych repozytoriów akcji z GitHub.com w ramach przedsiębiorstwa, jest to podejście manualne. Więcej szczegółów można znaleźć w [dokumentacji](https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#about-the-actions-sync-tool).
- [ ] GitHub Enterprise Server (GHES) nie może używać GitHub.com Actions ze względu na swoje lokalne środowisko i brak dostępu do internetu.
> Chociaż workflowy znajdujące się na instancji GHES nie mogą domyślnie używać GitHub.com Actions ani akcji z GitHub Marketplace, można to rozwiązać za pomocą GitHub Connect lub actions-sync.
