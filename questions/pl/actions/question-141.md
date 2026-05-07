---
question: "Dlaczego warto używać funkcji `hashFiles` podczas korzystania z `actions/cache`?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#hashfiles"
---
```yaml
  - uses: actions/cache@v5
    with:
      path: ~/.npm
      key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
```
- [x] Jeśli klucz pamięci podręcznej zawiera plik zależności objęty funkcją `hashFiles`, klucz zmienia się, gdy plik zależności zostanie zaktualizowany, co pomaga go utrzymać w aktualności.
> `hashFiles` to wbudowana funkcja GitHub, która tworzy hash dla określonej ścieżki. Użycie jej w celu stworzenia klucza pamięci podręcznej powoduje ponowne wygenerowanie hash, co z kolei aktualizuje klucz pamięci podręcznej. Oficjalna dokumentacja [Dependency Caching Reference](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching#example-using-the-cache-action) pokazuje, jak używać `hashFiles` jako części klucza pamięci podręcznej.
- [ ] `hashFiles` jest wymagane dla kompatybilności z runnerami na Windows.
- [ ] Podczas używania funkcji `hashFiles` jako części klucza pamięci podręcznej, w przypadku braku pamięci podręcznej, `hashFiles` dostarcza dodatkowych informacji debugowania.
- [ ] Podczas używania funkcji `hashFiles` jako części klucza pamięci podręcznej, zostanie wygenerowany dodatkowy krok w wywołującym workflow. Ten krok workflow wypisuje wartość skrótu SHA-256 klucza pamięci podręcznej dla celów referencyjnych.  
> Tworzenie skrótu klucza pamięci podręcznej nie byłoby użyteczne w większości sytuacji.
