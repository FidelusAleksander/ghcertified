---
question: "W jaki sposób można pobrać artefakt?"
documentation: "https://github.com/actions/upload-artifact#inputs"
---

- [x] Za pomocą akcji `actions/download-artifact` w workflow 
- [x] Pobierając artefakty z interfejsu użytkownika GitHub Actions w wykonaniu workflow
> Korzystanie z interfejsu użytkownika pozwala na manualne pobieranie artefaktów. Zobacz [dokumentację](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/download-workflow-artifacts), aby uzyskać więcej szczegółów.
- [x] Za pomocą dedykowanego endpointu GitHub API
> API GitHub ma endpoint "Download an artifact". Zobacz [dokumentację](https://docs.github.com/en/rest/actions/artifacts?apiVersion=2026-03-10#download-an-artifact), aby uzyskać więcej szczegółów.
- [ ] Za pomocą akcji `actions/upload-artifact` w workflow
> `actions/upload-artifact` jest używany do przesyłania artefaktów, a nie ich pobierania.
- [ ] Poprzez zdalny dostęp do samoobsługowych runnerów za pośrednictwem SSH i dostęp do katalogu `.github/artifacts`
> Artefakty są zazwyczaj przechowywane w infrastrukturze GitHub, a nie na runnerach. Istnieje jeden wyjątek: podczas korzystania z GitHub Enterprise Server (GHES) artefakty oraz inne dane generowane przez wykonanie workflow są przechowywane w zewnętrznej pamięci blob. Zobacz [dokumentację](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements) dotyczącą wymagań przechowywania w GHES.
