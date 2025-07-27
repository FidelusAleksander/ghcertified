---
title: "Pytanie 122"
question: "Jakie zakresy są zdefiniowane dla zmiennych niestandardowych w workflow? (wybierz trzy)"
---


> https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow
- [x] Cały workflow, używając `env` na najwyższym poziomie pliku workflow
- [x] Zawartość zadania w workflow, używając `jobs.<job_id>.env`
- [x] Konkretnego kroku w zadaniu, używając `jobs.<job_id>.steps[*].env`
- [ ] Wszystkich zadań w workflow, używając `jobs.env`
- [ ] Cały workflow, używając `custom.env` na najwyższym poziomie pliku workflow
- [ ] Konkretnego środowiska w repozytorium, używając `environment.<environment_id>.env` na najwyższym poziomie pliku workflow
