---
title: "Pytanie 013"
question: "Jak wykluczyć określone katalogi lub pliki z skanowania w poszukiwaniu sekretów?"
---


> https://docs.github.com/en/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories#excluding-directories-from-secret-scanning-alerts-for-users
1. [x] Poprzez utworzenie pliku `secret_scanning.yml` i dodanie ścieżek, które nie powinny być skanowane
1. [ ] Nie jest możliwe wykluczenie konkretnych plików i/lub katalogów ze skanowania. Po włączeniu skanowania w poszukiwaniu sekretów dla repozytorium, wszystkie pliki i katalogi będą skanowane.
1. [ ] Dodając te pliki do pliku `.gitignore`
1. [ ] Poprzez utworzenie pliku `dependabot.yml` i dodanie ścieżek, które nie powinny być skanowane
