---
question: "W jaki sposób organizacje korzystające z GitHub Enterprise Server mogą włączyć automatyczną synchronizację zewnętrznych GitHub Actions hostowanych na GitHub.com z ich instancją GitHub Enterprise Server?"
documentation: "https://docs.github.com/en/enterprise-server@3.17/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect"
---

- [x] Korzystając z GitHub Connect
> Po włączeniu GitHub Connect zostanie automatycznie nawiązane bezpieczne połączenie między instancją GitHub Enterprise Server (GHES) a kontem GitHub Enterprise Cloud (GHEC) (GHEC jest hostowane na GitHub.com). Konto GHEC działa jako zaufana (uwierzytelniona) tożsamość, którą GitHub.com wykorzystuje do autoryzacji instancji GHES do uzyskiwania dostępu do akcji hostowanych na GitHub.com.   
- [ ] GitHub Enterprise Server ma dostęp do wszystkich GitHub.com Actions domyślnie
> GitHub Actions na GitHub Enterprise Server jest zaprojektowane do pracy w środowiskach bez pełnego dostępu do internetu. Domyślnie workflowy nie mogą korzystać z akcji z GitHub.com i GitHub Marketplace.
- [ ] Korzystając z narzędzia actions-sync
> Chociaż actions-sync może być używane do synchronizacji indywidualnych repozytoriów akcji z GitHub.com na poziomie przedsiębiorstwa, jest to podejście manualne. Zobacz [dokumentację](https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#about-the-actions-sync-tool), aby uzyskać więcej szczegółów.
- [ ] GitHub Enterprise Server (GHES) nie może korzystać z GitHub.com Actions ze względu na jego charakter on-premise i brak dostępu do internetu.
> Chociaż workflowy znajdujące się na instancji GHES nie mogą domyślnie korzystać z akcji GitHub.com ani GitHub Marketplace, można to naprawić za pomocą GitHub Connect lub actions-sync.
