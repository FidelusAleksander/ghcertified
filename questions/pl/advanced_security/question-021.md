---
question: "Wiele publicznych repozytoriów, do których wnosisz wkład, nie ma włączonej opcji ochrony przed wypychaniem sekretów (secret scanning push protection). Co możesz zrobić, aby zabezpieczyć się przed przypadkowym wysłaniem sekretów do tych repozytoriów?"
documentation: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-users#about-push-protection-for-users"
---

- [x] Włącz `Push protection for yourself` w ustawieniach swojego osobistego konta GitHub
- [ ] Pobierz wtyczkę GitHub push protection web plugin
- [ ] To nie jest możliwe, ochrona przed wypychaniem musi być włączona na poziomie odpowiedniego repozytorium, organizacji lub Enterprise
- [ ] Dodaj pliki zawierające sekrety do pliku `.gitignore` we wszystkich repozytoriach
