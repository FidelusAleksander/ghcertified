---
question: "How do you ensure that `Upload Failure test report` step is be executed only if `Run Tests` step fails?"
archetype: "questions"
title: "Question 101"
draft: false
---


> https://docs.github.com/en/actions/learn-github-actions/expressions#status-check-functions

1. [x] 
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

1. [ ] 
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

1. [ ] 
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

1. [ ] 
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
