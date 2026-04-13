---
question: "Jakie jest zachowanie dotyczące powiadomień, gdy GitHub przeprowadza skanowanie całego historycznego kodu w repozytoriach enterprise?"
documentation: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning/monitoring-alerts#historical-scans"
---

- [x] GitHub powiadamia właścicieli enterprise i menedżerów ds. bezpieczeństwa, nawet jeśli nie zostaną znalezione żadne tajne dane.
- [x] GitHub powiadamia administratorów Repository, menedżerów ds. bezpieczeństwa oraz użytkowników o niestandardowych rolach z dostępem do odczytu/zapisu za każdym razem, gdy tajne dane zostaną wykryte w repozytorium.
- [ ] GitHub powiadamia właścicieli enterprise i menedżerów ds. bezpieczeństwa tylko, jeśli wykryje ujawnione tajne dane.
- [ ] GitHub powiadamia autorów commitów, które zawierają ujawnione tajne dane.
