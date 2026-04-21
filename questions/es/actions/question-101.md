---
question: "¿Cómo aseguras que el paso `Upload Failure test report` se ejecute solo si el paso `Run Tests` falla?"
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
> `failure()` anula la comprobación de estado predeterminada `success()` para que el paso pueda ejecutarse tras un fallo, y la comprobación del resultado se dirige al paso específico.

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
> `always()` funciona pero ejecuta el paso incluso en caso de cancelación, lo cual es más amplio de lo necesario.

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
> Sin una función de comprobación de estado como `failure()`, se aplica implícitamente `success()`, por lo que este paso se omite después de un fallo, aunque la comprobación del resultado sea correcta.

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
> No hay ninguna condición `if` — este paso solo se ejecuta cuando todos los pasos anteriores tienen éxito (el comportamiento predeterminado).
