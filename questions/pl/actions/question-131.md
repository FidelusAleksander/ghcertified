---
question: "Które z poniższych stwierdzeń dotyczących wywoływania wielokrotnego użytku workflowów w porównaniu do wywoływania composite actions są prawdziwe?"
documentation: "https://docs.github.com/en/actions/concepts/workflows-and-actions/reusing-workflow-configurations#key-differences-between-reusable-workflows-and-composite-actions"
---

- [x] Composite actions są wywoływane przez odwołanie się do folderu zawierającego ich plik `action.yml`.
> Composite actions muszą zawierać główną logikę w pliku `action.yml`. Aby wywołać composite action, należy wskazać lokalizację jej pliku `action.yml` (łącznie z głównym katalogiem. Np. aby wywołać composite action znajdującą się w głównym katalogu tego samego repozytorium co wywołujący workflow, należy użyć składni `uses: ./`).
- [ ] Reusable workflows są wywoływane przez odwołanie się do folderu zawierającego ich plik `action.yml`.
> Reusable workflows to zwykłe pliki `.yml` lub `.yaml`, które są przechowywane w katalogu `.github/workflows`. Nie mają pliku `action.yml`.
- [x] Composite actions muszą być wywoływane jako krok w ramach zadania.
> Composite actions (tak jak każda inna action) są wywoływane w ramach kroku w zadaniu workflow--innymi słowy, nie jest wymagane specjalne zadanie workflow wyłącznie w celu wywołania composite action.
- [x] Reusable workflows muszą być wywoływane na poziomie zadania workflow (nie na poziomie kroku).
> Kroki w ramach zadania workflow nie mogą wywoływać reusable workflows. Reusable workflow musi być wywoływany przez indywidualne zadanie w ramach workflow wywołującego. Może to skutkować uruchamianiem jednego lub więcej zadań w workflow wywołującym (wspomniane zadania mogą być widoczne w wynikach workflow w interfejsie GitHub Actions).
- [ ] Sekrety mogą być przekazywane zarówno do reusable workflows, jak i do composite actions za pomocą bloku `uses.secrets`.
> Tylko do reusable workflows można przesyłać sekrety za pomocą bloku `secrets`. Aby przekazać sekrety do composite actions, należy użyć obejść (na przykład przekazując sekret jako input).
- [ ] Tylko reusable workflows mogą przyjmować dane wejściowe.
> Zarówno reusable workflows, jak i composite actions mogą przyjmować dane wejściowe.
- [x] Reusable workflows mogą używać innego typu runnera niż workflow je wywołujący, podczas gdy composite actions nie mogą.
> Reusable workflows mają zadania, tak jak każdy inny workflow, a te zadania mogą określać różne typy runnerów za pomocą klucza `jobs.runs-on`. Composite actions dziedziczą środowisko runnera z zadania workflow je wywołującego.
