---
question: "Jak można określić harmonogram działania workflow GitHub Actions, aby uruchamiał się tylko w dni powszednie?"
title: "Pytanie 098"
---

> https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule
1. [ ] dodać warunek w pliku YAML workflow dla dni powszednich
1. [ ] nie jest to możliwe w GitHub Actions
1. [ ] użyć wyzwalacza zdarzeń on: schedule: weekdays
1. [x] użyć wyzwalacza zdarzeń on: schedule: cron
