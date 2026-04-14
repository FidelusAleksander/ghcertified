---
question: "Jak można określić harmonogram działania workflow GitHub Actions, aby uruchamiał się tylko w dni robocze?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule"
---

- [ ] dodaj warunek w YAML workflow dla dni roboczych
- [ ] nie jest to możliwe w GitHub Actions
- [ ] użyj wyzwalacza zdarzeń on: schedule: weekdays
- [x] użyj wyzwalacza zdarzeń on: schedule: cron
