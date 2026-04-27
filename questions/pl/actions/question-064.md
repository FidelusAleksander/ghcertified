---
question: "W jaki sposób organizacje korzystające z GitHub Enterprise Server mogą włączyć automatyczną synchronizację zewnętrznych GitHub Actions hostowanych na GitHub.com z ich instancją GitHub Enterprise Server?"
documentation: "https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect"
---

- [x] Korzystając z GitHub Connect
> Po włączeniu GitHub Connect zostanie użyty do automatycznego ustanowienia bezpiecznego połączenia między instancją GitHub Enterprise Server (GHES) a kontem GitHub Enterprise Cloud (GHEC) (GHEC jest hostowany na GitHub.com). Konto GHEC pełni rolę zaufanej (uwierzytelnionej) tożsamości używanej przez GitHub.com do autoryzacji instancji GHES w celu uzyskania dostępu do akcji hostowanych na GitHub.com.  
- [ ] GitHub Enterprise Server domyślnie ma dostęp do wszystkich GitHub.com Actions
> GitHub Actions na GitHub Enterprise Server został zaprojektowany do pracy w środowiskach bez pełnego dostępu do internetu. Domyślnie workflowy nie mogą korzystać z akcji z GitHub.com ani z GitHub Marketplace.
- [ ] Korzystając z narzędzia actions-sync
> Chociaż actions-sync może być używany do synchronizowania poszczególnych repozytoriów akcji z GitHub.com, jest to podejście manualne. Zobacz [dokumentację](https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#about-the-actions-sync-tool), aby uzyskać więcej szczegółów.
- [ ] GitHub Enterprise Server (GHES) nie może korzystać z GitHub.com Actions z powodu swojej lokalnej (on-premise) natury i braku dostępu do internetu.
> Chociaż workflowy znajdujące się w instancji GHES nie mogą domyślnie korzystać z GitHub.com Actions ani z GitHub Marketplace, można to naprawić za pomocą GitHub Connect lub actions-sync. 
