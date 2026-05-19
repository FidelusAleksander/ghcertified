---
question: "W jaki sposób można usuwać artefakty workflowów?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts"
---

- [x] Korzystając z interfejsu użytkownika GitHub Actions, aby przejść do uruchomienia workflowu i usunąć artefakty indywidualnie
- [x] Korzystając z interfejsu użytkownika GitHub Actions, aby usunąć uruchomienie workflowu, które wygenerowało artefakty
> Usunięcie uruchomienia workflowu powoduje również usunięcie związanych z nim artefaktów.
- [x] Korzystając z konkretnego endpointu GitHub API
> GitHub API oferuje endpoint "Delete an artifact". Zobacz [dokumentację](https://docs.github.com/en/rest/actions/artifacts?apiVersion=2026-03-10#delete-an-artifact), aby uzyskać więcej informacji.
- [ ] Korzystając z akcji `actions/delete-artifact` w workflowie
- [ ] Zdalnie łącząc się z własnych runnerów poprzez SSH, przechodząc do katalogu `.github/artifacts` i usuwając wybrane artefakty
> Artefakty są zazwyczaj przechowywane przy użyciu infrastruktury GitHub, a nie runnerów.
- [ ] Ustawiając okres przechowywania artefaktów na 0 dni
> Okresy przechowywania artefaktów nie mogą być ustawione na 0 dni. Zobacz [dokumentację](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization), aby uzyskać więcej informacji.
