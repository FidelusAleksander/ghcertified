---
question: "Jak można zmienić okres przechowywania artefaktów wygenerowanych przez określony workflow?"
documentation: "https://github.com/actions/upload-artifact#inputs"
---

- [x] Korzystając z wejścia `retention-days` w `actions/upload-artifact` 
- [ ] Korzystając z wejścia `retention-days` w `actions/download-artifact`
> `actions/download-artifact` służy do pobierania artefaktów. W związku z tym nie ma wpływu na to, jak długo przesłany artefakt powinien być przechowywany. Dodatkowo, `retention-days` nie jest wejściem dla tej akcji. Zobacz [dokumentację](https://github.com/actions/download-artifact#inputs) po więcej informacji. 
- [ ] Przechodząc do ustawień Actions w repozytorium i edytując wartość ustawienia "Artifact and log retention" dla wymienionego workflow.
> Chociaż można edytować ustawienie ["Artifact and log retention"](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository) w repozytorium, to dotyczy ono wszystkich workflow w tym repozytorium, a nie poszczególnych workflow. To ustawienie nie wyświetla poszczególnych workflow.
- [ ] Przechodząc do ustawień Actions organizacji i edytując wartość ustawienia "Artifact and log retention"
> Chociaż można edytować ustawienie ["Artifact and log retention"](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization) w organizacji, to dotyczy ono wszystkich workflow w danej organizacji, a nie poszczególnych workflow.
