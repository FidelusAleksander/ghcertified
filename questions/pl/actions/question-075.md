---
question: "W przepływie pracy, który ma wiele zadań, wszystkie uruchamiane na runnerach hostowanych przez GitHub, czy to prawda, że wszystkie zadania są uruchamiane na tej samej maszynie runnera?"
title: "Pytanie 075"
---

> https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners  
1. [x] Nie  
1. [ ] Tak  
> Każde zadanie uruchamia się w nowej instancji obrazu runnera określonego przez runs-on  
1. [ ] Tylko jeśli są uruchamiane równolegle  
> Każde zadanie uruchamia się w nowej instancji obrazu runnera określonego przez runs-on  
1. [ ] Tylko jeśli używają tej samej etykiety `runs-on`  
> Każde zadanie uruchamia się w nowej instancji obrazu runnera określonego przez runs-on  
