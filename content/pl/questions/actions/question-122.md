---
title: "Pytanie 122"
question: "Jakie zakresy są zdefiniowane dla zmiennych niestandardowych w przepływie pracy? (wybierz trzy)"
---


> https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow
- [x] Cały przepływ pracy, używając `env` na najwyższym poziomie pliku przepływu pracy
- [x] Zawartość zadania w przepływie pracy, używając `jobs.<job_id>.env`
- [x] Konkretnego kroku w zadaniu, używając `jobs.<job_id>.steps[*].env`
- [ ] Wszystkich zadań w przepływie pracy, używając `jobs.env`
- [ ] Całego przepływu pracy, używając `custom.env` na najwyższym poziomie pliku przepływu pracy
- [ ] Konkretnego środowiska w repozytorium, używając `environment.<environment_id>.env` na najwyższym poziomie pliku przepływu pracy
