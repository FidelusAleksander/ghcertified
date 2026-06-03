---
question: "Przyjrzyj się wartościom w kluczu `runs-on`, jak pokazano w poniższym zadaniu workflow. Co jest prawdą na temat tego, jak zadanie będzie uruchamiane?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow#using-custom-labels-to-route-jobs"
---
```yaml
jobs:
    fire_emblem_deploy:
        name: "Deploy the 'Fire Emblem' application"
        runs-on: [self-hosted,nes,linux]
```

- [x] Zadanie zostanie uruchomione na self-hosted runnerze, który ma wszystkie zastosowane etykiety.
- [ ] Zadanie zostanie uruchomione na self-hosted runnerze, który ma dowolną z zastosowanych etykiet.
> Etykiety runnerów działają łącznie; workflow nie zostanie uruchomione na runnerze, który ma tylko część wymaganych etykiet. Wszystkie muszą być spełnione.
- [ ] Zadanie nadal będzie mogło zostać uruchomione na GitHub-hosted runnerach, ponieważ one mogą mieć zastosowane niestandardowe etykiety.
> GitHub-hosted runnery nie mogą mieć zastosowanych niestandardowych etykiet. Muszą zostać odwołane za pomocą [predefiniowanych etykiet](https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job#standard-github-hosted-runners-for-public-repositories), które im przypisano.
- [ ] Zadanie zostanie uruchomione na runnerze (self-hosted lub GitHub-hosted, w zależności od tego, który jest pierwszy dostępny) z nazwą `self-hosted,nes,linux`
> `runs-on` odnosi się do etykiet runnera, a nie nazw.
