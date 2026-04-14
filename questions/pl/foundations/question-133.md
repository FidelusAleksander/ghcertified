---
question: "Którego połączenia operatorów zaawansowanego wyszukiwania użyłbyś, aby znaleźć publiczne repozytoria z ponad 100 gwiazdkami, które zawierają 'docker' w swojej nazwie?"  
draft: false  
documentation: "https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories"
---

- [x] `in:name docker stars:>100 is:public`  
> **Poprawne**. To wyszuka wszystkie publiczne repozytoria, które mają 'docker' w nazwie i ponad 100 gwiazdek.  
- [ ] `docker in:description stars:<100 is:public`  
- [ ] `is:public name:docker stars:100`  
> Brakuje operatora zakresu (`>`) dla gwiazdek, a `name:docker` nie jest poprawną składnią.  
- [ ] `topic:docker stars:>100 in:readme`  
> To wyszukuje w tematach lub plikach readme, a nie w nazwie repozytorium.  

