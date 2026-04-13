---
question: "Jakie są potencjalne wektory nadużyć związane z włączaniem self-hosted runners w publicznych repository?"
documentation: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#self-hosted-runner-security"
---

- [x] Złośliwe programy uruchamiane na maszynie
- [x] Ucieczka z sandboxa środowiska runnera
- [x] Eksponowanie środowiska sieciowego
- [x] Utrwalanie niebezpiecznych danych
- [ ] Automatyczne czyszczenie środowiska po wykonaniu zadania może powodować utratę danych
- [ ] Niższa wydajność obliczeniowa w wyniku zastosowanych środków bezpieczeństwa
- [ ] Ograniczona integracja z usługami hostowanymi przez GitHub
