---
question: "Czy w procesie z wieloma zadaniami, wszystkie uruchamiane na runnerach hostowanych przez GitHub, można zagwarantować, że wszystkie zadania będą uruchamiane na tej samej maszynie runnera?"
documentation: "https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners"
---

- [x] Nie
- [ ] Tak  
> Każde zadanie uruchamiane jest w świeżej instancji obrazu runnera określonego w `runs-on`
- [ ] Tylko jeśli są uruchamiane równolegle  
> Każde zadanie uruchamiane jest w świeżej instancji obrazu runnera określonego w `runs-on`
- [ ] Tylko jeśli używają tego samego etykiety `runs-on`  
> Każde zadanie uruchamiane jest w świeżej instancji obrazu runnera określonego w `runs-on`
