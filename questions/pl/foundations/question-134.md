---
question: "Które z poniższych najlepiej opisuje GitHub secret scanning?"  
draft: false  
documentation: "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
---

- [ ] Funkcja, która skanuje issues w poszukiwaniu niezweryfikowanych poświadczeń i automatycznie je usuwa.  
> Secret scanning nie usuwa niczego automatycznie; wykrywa potencjalnie ujawnione sekrety.  
- [ ] Funkcja, która szyfruje sekrety repozytorium przed przesłaniem ich na GitHub.  
> GitHub Actions Encrypted Secrets zajmuje się szyfrowaniem, ale to różni się od secret scanning.  
- [ ] Funkcja, która uruchamia menedżery haseł firm trzecich na Twoim kodzie, aby bezpiecznie przechowywać sekrety.  
- [x] Funkcja, która przeszukuje repozytoria pod kątem znanych formatów sekretów, aby zapobiec przypadkowemu ujawnieniu wrażliwych danych.  
> **Poprawna odpowiedź**. Secret scanning wykrywa tokeny, klucze i inne poświadczenia, aby pomóc uniknąć wycieków.  
