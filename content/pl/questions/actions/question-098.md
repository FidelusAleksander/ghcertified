---
question: "Jak można określić harmonogram działania GitHub Actions workflow, aby uruchamiał się tylko w dni powszednie?"
title: "Pytanie 098"
---

> https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule
1. [ ] dodaj warunek w pliku YAML workflow dla dni powszednich
1. [ ] nie jest to możliwe w GitHub Actions
1. [ ] użyj wyzwalacza zdarzeń on: schedule: weekdays
1. [x] użyj wyzwalacza zdarzeń on: schedule: cron
