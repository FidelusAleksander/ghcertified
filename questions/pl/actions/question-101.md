---
question: "Jak zapewnić, że krok `Upload Failure test report` zostanie wykonany tylko wtedy, gdy krok `Run Tests` zakończy się niepowodzeniem?"
documentation: "https://docs.github.com/en/actions/learn-github-actions/expressions#status-check-functions"
---

- [x] 
```yaml
- name: Run Tests
  id: run-tests
  run: npm run test

- name: Upload Failure test report
  if: failure() && steps.run-tests.outcome == 'failure'
  uses: actions/upload-artifact@v3
  with:
    name: test-report
    path: test-reports.html
```
> `failure()` nadpisuje domyślną funkcję sprawdzania statusu `success()`, dzięki czemu krok może zostać wykonany po niepowodzeniu, a warunek sprawdzający wynik odnosi się do konkretnego kroku.

- [ ] 
```yaml
- name: Run Tests
  id: run-tests
  run: npm run test

- name: Upload Failure test report
  if: always()
  uses: actions/upload-artifact@v3
  with:
    name: test-report
    path: test-reports.html
```
> `always()` działa, ale powoduje wykonanie kroku nawet w przypadku anulowania, co jest szerszym podejściem niż wymagane.

- [ ] 
```yaml
- name: Run Tests
  id: run-tests
  run: npm run test

- name: Upload Failure test report
  if: steps.run-tests.outcome == 'failure'
  uses: actions/upload-artifact@v3
  with:
    name: test-report
    path: test-reports.html
```
> Bez funkcji sprawdzania statusu, takiej jak `failure()`, domyślnie stosowana jest funkcja `success()`, więc ten krok jest pomijany po wystąpieniu niepowodzenia, nawet jeśli warunek wyniku jest poprawny.

- [ ] 
```yaml
- name: Run Tests
  id: run-tests
  run: npm run test

- name: Upload Failure test report
  uses: actions/upload-artifact@v3
  with:
    name: test-report
    path: test-reports.html
```
> Brak warunku `if` — ten krok jest wykonywany tylko wtedy, gdy wszystkie poprzednie kroki zakończą się sukcesem (domyślne zachowanie).
