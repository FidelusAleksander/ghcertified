---
question: "Która z poniższych opcji najlepiej opisuje GitHub secret scanning?"  
draft: false  
documentation: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning"
---

- [ ] Funkcja, która skanuje zgłoszenia pod kątem nieweryfikowanych danych uwierzytelniających i automatycznie je usuwa.  
> Secret scanning nie usuwa niczego automatycznie; wykrywa potencjalnie ujawnione sekrety.  
- [ ] Funkcja, która szyfruje sekrety repozytorium przed ich wysłaniem do GitHub.  
> GitHub Actions Encrypted Secrets zajmują się szyfrowaniem, ale to różni się od secret scanning.  
- [ ] Funkcja, która uruchamia na Twoim kodzie menedżery haseł innych firm w celu bezpiecznego przechowywania sekretów.  
- [x] Funkcja, która przeszukuje repozytoria w poszukiwaniu znanych formatów sekretów, aby zapobiec przypadkowemu ujawnieniu wrażliwych danych.  
> **Poprawne**. Secret scanning wykrywa tokeny, klucze i inne dane uwierzytelniające, aby pomóc w uniknięciu wycieków.  

