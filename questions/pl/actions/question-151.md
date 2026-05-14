---
question: "Czego powinieneś użyć, aby przekazywać informacje między zadaniami: job outputs czy `GITHUB_ENV`?"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables#passing-values-between-steps-and-jobs-in-a-workflow"
---

- [x] Job outputs, ponieważ wartość zmiennych środowiskowych ustawionych za pomocą zapisu do `GITHUB_ENV` dotyczy tylko bieżącego zadania.
> Chociaż `env` można ustawić na poziomie workflow (co oznacza, że jego zmienne mogą być odwoływane przez wiele zadań), to zmiana wartości zmiennej środowiskowej nie trwa poza zadaniem, które ją zmieniło.
- [ ] `GITHUB_ENV`, ponieważ job outputs można ustawiać i odwoływać tylko w ramach tego samego zadania.
- [ ] Job outputs, ponieważ są prostsze do skonfigurowania.
> Konfigurowanie i odwoływanie się do job outputs jest bardziej skomplikowane niż korzystanie z `GITHUB_ENV`. Na przykład, job outputs wymagają skonfigurowania bloku `outputs`, dodania `id` do kroku i używania `needs` do wskazywania zależności.
- [ ] `GITHUB_ENV`, ponieważ ustawianie zmiennych środowiskowych za jego pomocą znacząco zmniejsza obciążenie runnera, skracając czas działania workflow.
