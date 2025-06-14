---
title: "Pytanie 134"  
question: "Które z poniższych najlepiej opisuje skanowanie tajemnic w GitHub?"  
draft: false  
---

> **Więcej informacji**: [O skanowaniu tajemnic](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)

1. [ ] Funkcja, która skanuje problemy pod kątem niezweryfikowanych poświadczeń i automatycznie je usuwa.  
  > Skanowanie tajemnic nie usuwa nic automatycznie; wykrywa potencjalnie wyciekłe tajemnice.  
1. [ ] Funkcja, która szyfruje tajemnice repozytorium przed przesłaniem ich do GitHub.  
  > Szyfrowanie obsługiwane jest przez Encrypted Secrets w GitHub Actions, ale to różni się od skanowania tajemnic.  
1. [ ] Funkcja, która uruchamia menedżery haseł innych firm na Twoim kodzie, aby bezpiecznie przechowywać tajemnice.  
1. [x] Funkcja, która przeszukuje repozytoria pod kątem znanych formatów tajemnic, aby zapobiec przypadkowemu ujawnieniu danych wrażliwych.  
  > **Poprawne**. Skanowanie tajemnic wykrywa tokeny, klucze i inne poświadczenia, aby pomóc unikać wycieków.  

