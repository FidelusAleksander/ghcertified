---
question: "Twoja organizacja chce skrócić okres przechowywania artefaktów, powołując się na obawy związane z przestrzenią dyskową. Jak można to zrobić na poziomie organizacyjnym?"
documentation: "https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization"
---

- [x] Przechodząc do ustawień Actions organizacji i edytując wartość ustawienia "Artifact and log retention"
- [ ] Korzystając z self-hosted runners, tworząc plik `.github/retention-policy.yml` i określając wartość klucza `artifact-retention-period`
> Dostosowanie okresów przechowywania artefaktów nie jest ograniczone do self-hosted runners.  
- [ ] To nie jest możliwe na poziomie organizacyjnym. Wszystkie workflowy używające `actions/upload-artifact` muszą korzystać z wymaganego parametru `retention-days`.
> Chociaż parametr `retention-days` może być użyty do dostosowania okresu przechowywania pojedynczych artefaktów tworzonych przez workflow, nie jest to właściwe w przypadku próby zastosowania ogólnopolityki na poziomie organizacyjnym. Ponadto parametr `retention-days` jest [opcjonalny, a nie wymagany](https://github.com/actions/upload-artifact#inputs).
- [ ] Nie jest to możliwe: artefakty są zawsze przechowywane przez 90 dni we wszystkich systemach implementujących Github Actions.
> Domyślny okres przechowywania artefaktów wynosi 90 dni. Możliwe jest zmienienie tej wartości we wszystkich systemach implementujących Github Actions. 
