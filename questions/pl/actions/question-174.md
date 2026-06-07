---
question: "Poniższy przepływ pracy wywołuje wielokrotnego użytku przepływ pracy w jednej ze swoich prac. Wielokrotnego użytku przepływ pracy ma zdefiniowane `permissions` na poziomie przepływu pracy, jak widać poniżej. Jaki będzie rezultat wywołania wielokrotnego użytku przepływu pracy?"
documentation: "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
---

```yaml
# przepływ pracy wywołujący
on:
    issues:
        types: [opened]
    
    permissions:
        contents: write

    jobs:
        issue_creator:
            permissions:
                contents: read
            uses: ./.github/workflows/issue-creator.yml

# przepływ pracy wielokrotnego użytku (issue-creator.yml)
on:
    workflow_call:

    permissions:
        contents: write

    jobs:
        create_issue:
            runs-on: ubuntu-latest
            steps: 
                env: GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}    
                - run: gh issue create --title "Issue report" --body "Hello!" --repo $GITHUB_REPOSITORY

```
- [x] Wielokrotnego użytku przepływ pracy zwróci błąd, ponieważ praca, która go wywołuje, ma tylko uprawnienia `contents:read`
> W tym scenariuszu przepływ pracy wywołujący zostanie uruchomiony, ale jego praca nie zostanie wykonana. Zamiast tego wygenerowany zostanie błąd informujący, że plik przepływu pracy wywołującego jest nieważny, ponieważ przepływ pracy wielokrotnego użytku żąda `contents:write`, ale ma tylko przyznane `contents:read`.
- [ ] Wielokrotnego użytku przepływ pracy utworzy zgłoszenie w repozytorium zatytułowane `"Issue Report"`
> Tak by się stało, gdyby praca `issue_creator` miała uprawnienia `contents:write`, które mogłyby zostać odziedziczone przez przepływ pracy wielokrotnego użytku.
- [ ] Wielokrotnego użytku przepływ pracy nie zostanie wywołany, ponieważ przepływy pracy wielokrotnego użytku muszą znajdować się w podkatalogu `.github/workflows`
> Wszystkie przepływy pracy muszą być zlokalizowane w katalogu `.github/workflows`.
- [ ] Ani wywołujący, ani wielokrotnego użytku przepływ pracy nie zostaną wywołane, ponieważ `issues` nie jest dostępnych zdarzeniem wyzwalającym dla GitHub Actions. 
> `issues` jest standardowym zdarzeniem wyzwalającym, co można zobaczyć w [dokumentacji](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#issues).
