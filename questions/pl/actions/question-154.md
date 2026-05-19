---
question: "Kiedy warto stworzyć akcję kontenerową Docker, aby udostępnić ją w GitHub Actions marketplace?"
documentation: "https://docs.github.com/en/actions/concepts/workflows-and-actions/custom-actions#docker-container-actions"
---

- [x] Akcje kontenerowe Docker zapewniają spójne środowisko uruchomieniowe i określone zależności bez konieczności ich obsługi przez użytkowników
- [ ] Akcje kontenerowe Docker to gotowe, niskokosztowe rozwiązanie
> Akcje kontenerowe Docker nie są uważane za niskokosztowe, ponieważ wymagają użycia obrazu (wstępnie zbudowanego lub określonego przez `Dockerfile`), skryptu wejściowego, a także potencjalnie logiki przed i po skrypcie wejściowym.
- [ ] Akcje kontenerowe Docker mają szybki czas uruchamiania na komputerach z systemami Windows i macOS
> Kontenery Docker mogą być wykonywane jedynie na runnerach z systemem Linux (`ubuntu-latest` dla runnerów hostowanych przez GitHub). Mają one również dłuższy czas uruchamiania w porównaniu z akcjami JavaScript i składanymi akcjami.
- [ ] Akcje kontenerowe Docker to pakiet kroków w ramach innych przepływów pracy, który jest uruchamiany w kontekście wywołującego przepływu pracy/akcji
> "Pakiet wielokrotnego użytku kroków" opisuje akcję składaną, a nie akcję kontenerową Docker.
- [ ] Akcje kontenerowe Docker pozwalają na wykorzystanie Dockera bez wymagania pliku `action.yml`
> Wszystkie akcje, niezależnie od typu, muszą korzystać z pliku `action.yml`
