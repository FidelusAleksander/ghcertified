---
title: "Pytanie 014"
question: "Do swojego kodu testowego wprowadziłeś kilka fałszywych sekretów, które zostały wykryte przez funkcję skanowania sekretów GitHub. Co możesz zrobić, aby poinformować GitHub, że są to fałszywe sekrety używane w testach i można je pominąć w skanowaniu? (Wybierz dwie odpowiedzi.)"
---


> https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/excluding-folders-and-files-from-secret-scanning
- [x] Poprzez utworzenie pliku `secret_scanning.yml`, w którym zadeklarujesz ścieżki, gdzie znajdują się fałszywe sekrety, dzięki czemu skanowania będą je pomijać
- [x] Zamknij alert związany ze skanowaniem sekretów z powodem zamknięcia `Used in tests`
- [ ] W swoich testowych plikach dodaj komentarz `#gh_ignore: fake secret` w wierszu, w którym znajduje się fałszywy sekret.
- [ ] Poprzez utworzenie pliku `.github/codeql.yml`, w którym zadeklarujesz ścieżki, gdzie znajdują się fałszywe sekrety, dzięki czemu skanowania będą je pomijać
