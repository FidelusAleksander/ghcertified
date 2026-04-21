---
question: "「`Upload Failure test report`」ステップを、「`Run Tests`」ステップが失敗した場合にのみ実行するには、どうすればよいですか？"
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
> `failure()` はデフォルトの `success()` ステータスチェックを上書きするため、このステップは失敗後にも実行でき、アウトカムチェックは特定のステップを対象とします。

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
> `always()` は機能しますが、キャンセルされた場合でもステップを実行するため、必要以上に広範囲に適用されます。

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
> `failure()` のようなステータスチェック関数がないと、暗黙的に `success()` が適用されるため、このステップは失敗後にはスキップされ、アウトカムチェックは正しく機能しません。

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
> 全く `if` 条件がない場合、このステップは前のすべてのステップが成功したときのみ実行されます（デフォルトの動作）。

