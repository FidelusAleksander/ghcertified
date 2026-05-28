---
question: "Mercedes chce opublikować Docker container action, którą stworzyła, w GitHub Actions Marketplace. Jakie pliki są jej minimalnie potrzebne, aby to zrobić?"
documentation: "https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace"
---

- [x] `action.yml`
> Plik `action.yml` jest wymagany, aby opublikować action w Marketplace, niezależnie od jej typu.
- [x] `Dockerfile`, jeśli obraz jest tworzony jako część action podczas uruchamiania workflow
> Docker container actions wymagają pliku `Dockerfile` tylko wtedy, gdy obraz musi być stworzony od podstaw i nie może być pobrany z rejestru obrazów. Wartość `runs.image` w `action.yml` musi być ścieżką do `Dockerfile`.
- [ ] `Dockerfile`, jeśli obraz ma być odniesiony z rejestru obrazów
> Kiedy odwołujemy się do obrazu z rejestru obrazów, plik `Dockerfile` nie jest potrzebny. Wartość klucza `runs.image` w `action.yml` musi być poprzedzona prefiksem `docker://`, a następnie nazwą obrazu. Zobacz sekcje "runs" i "runs.image" w [dokumentacji](https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax#runsimage), aby uzyskać więcej informacji.
- [ ] `README.md`
> Chociaż plik `README.md` jest zalecany przez GitHub dla Actions publikowanych w Marketplace, nie jest on ścisłym wymogiem.
- [ ] `.dockerignore`
- [ ] `CONTRIBUTING.md`
