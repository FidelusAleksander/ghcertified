---
question: "Musisz upewnić się, że środowisko `prod` wymaga ręcznej akceptacji przed kontynuowaniem wdrożeń. Które z poniższych opcji są prawidłowe w kontekście konfiguracji tego ustawienia?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments#required-reviewers"
---

- [x] Jeśli wymienisz wymaganych recenzentów, tylko jeden z nich musi zatwierdzić, aby kontynuować wdrożenie.
- [x] Możesz zapobiec samodzielnym recenzjom, w przypadku gdy osoba chcąca wdrożyć jest również wymaganą osobą recenzującą.
- [ ] Jeśli wymienisz wymaganych recenzentów, wszyscy muszą zatwierdzić, aby kontynuować wdrożenie.
> Co zaskakujące, tylko jeden z wymaganych recenzentów musi zatwierdzić zadanie workflow. Aby wymusić takie zachowanie, musisz utworzyć niestandardową regułę ochrony wdrożenia za pomocą GitHub App.
- [ ] Nie można zapobiec samodzielnym recenzjom, ale można skonfigurować alerty informujące, kto uruchomił wdrożenie.
- [ ] Jako wymaganych recenzentów można przypisać wyłącznie indywidualnych użytkowników, nie zespoły.
> Zarówno indywidualni użytkownicy, jak i zespoły mogą być przypisani jako wymagani recenzenci.
- [ ] Wymagani recenzenci potrzebują co najmniej dostępu na poziomie `write` do repozytorium, aby zatwierdzić.
> Wymagani recenzenci potrzebują co najmniej dostępu na poziomie `read`.
