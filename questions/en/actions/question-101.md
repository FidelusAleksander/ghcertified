---
question: "How do you ensure that `Upload Failure test report` step is executed only if `Run Tests` step fails?"
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
> `if: steps.run-tests.outcome == 'failure'` is not enough because step `if` conditions that do not contain a status check function still get an implicit `success()` check, so this step is skipped after `Run Tests` fails. Add `failure()` to override that default and combine it with `steps.run-tests.outcome == 'failure'` so the step runs only when `run-tests` fails.

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
