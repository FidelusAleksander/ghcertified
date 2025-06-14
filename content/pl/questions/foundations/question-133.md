---
title: "Pytanie 133"  
question: "Jakiej kombinacji zaawansowanych operatorów wyszukiwania użyłbyś, aby znaleźć publiczne repozytoria z ponad 100 gwiazdkami, które mają w nazwie 'docker'?"  
draft: false  
---

> **Więcej informacji**: [Wyszukiwanie repozytoriów](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)

1. [x] `in:name docker stars:>100 is:public`  
  > **Poprawne**. To wyszuka wszystkie publiczne repozytoria, które mają 'docker' w nazwie i więcej niż 100 gwiazdek.  
1. [ ] `docker in:description stars:<100 is:public`  
1. [ ] `is:public name:docker stars:100`  
  > Brakuje tu operatora zakresu (`>`) dla gwiazdek, a `name:docker` nie jest poprawną składnią.  
1. [ ] `topic:docker stars:>100 in:readme`  
  > To wyszukuje w tematach lub plikach readme, a nie w nazwie repozytorium.  

