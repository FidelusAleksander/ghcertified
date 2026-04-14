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
  run: actions/upload-artifact@v3
  with:
    name: test-report
    path: test-reports.html
```

- [ ] 
```yaml
- name: Run Tests
  id: run-tests
  run: npm run test

- name: Upload Failure test report
  if: always() && steps.run-tests.outcome == 'failure'
  run: actions/upload-artifact@v3
  with:
    name: test-report
    path: test-reports.html
```

- [ ] 
```yaml
- name: Run Tests
  id: run-tests
  run: npm run test

- name: Upload Failure test report
  if: steps.run-tests.outcome == 'failure'
  run: actions/upload-artifact@v3
  with:
    name: test-report
    path: test-reports.html
```

- [ ] 
```yaml
- name: Run Tests
  id: run-tests
  run: npm run test

- name: Upload Failure test report
  run: actions/upload-artifact@v3
  with:
    name: test-report
    path: test-reports.html
```
