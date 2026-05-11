---
question: "Masz tajny ciąg znaków zakodowany w formacie base-64, który dekodujesz w przepływie pracy GitHub Actions. Jak możesz upewnić się, że zdekodowany sekret przypadkowo nie pojawi się w dzienniku przepływu pracy?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#masking-a-value-in-a-log"
---

- [x] Używając polecenia `add-mask` w przepływie pracy w zadaniach, w których może być używany zdekodowany sekret.
> Użycie `add-mask` ukryje wartości, które GitHub Actions nie wykrywa jako sekret. Należy to zrobić raz dla każdej wartości, w każdym zadaniu, które korzysta ze zdekodowanego sekretu.
- [ ] Nie trzeba nic robić, ponieważ infrastruktura GitHub Actions automatycznie ukrywa zdekodowane sekrety.
> Nie ma gwarancji, że GitHub Actions będzie w stanie automatycznie wykryć i ukryć przekształcone sekrety zgodnie z [dokumentacją](https://docs.github.com/en/actions/reference/security/secure-use#use-secrets-for-sensitive-information).  
- [ ] Unikanie używania instrukcji drukujących zawierających zdekodowany sekret, ponieważ jest to jedyny sposób, w jaki zdekodowany sekret mógłby pojawić się w dzienniku przepływu pracy.
> Chociaż unikanie instrukcji drukujących zawierających zdekodowane sekrety jest zalecane, zdekodowane sekrety mogą pojawić się w innych miejscach dziennika przepływu pracy, takich jak komunikaty związane z wywołaniami API.
- [ ] Użycie wbudowanej funkcji `maskSecret`, aby ukryć zdekodowany sekret w przypadkach, gdy może być on używany.
> `maskSecret` nie jest wbudowaną funkcją dostarczaną przez GitHub Actions.
