---
question: "Como você garante que a etapa `Upload Failure test report` seja executada apenas se a etapa `Run Tests` falhar?"
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
> `failure()` substitui a verificação de status padrão `success()`, permitindo que a etapa seja executada após uma falha, e a verificação de resultado tem como alvo a etapa específica.

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
> `always()` funciona, mas executa a etapa mesmo em caso de cancelamento, o que é mais amplo do que o necessário.

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
> Sem uma função de verificação de status como `failure()`, a função implícita `success()` é aplicada, então esta etapa é ignorada após uma falha, mesmo que a verificação de resultado esteja correta.

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
> Nenhuma condição `if` — esta etapa só é executada quando todas as etapas anteriores têm sucesso (comportamento padrão).
