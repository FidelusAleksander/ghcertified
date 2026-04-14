---
question: "再利用可能なワークフローへの権限の引き渡しに関して、正しい記述はどれですか？"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#access-and-permissions"
---

- [x] 呼び出し元のワークフローから渡される `GITHUB_TOKEN` の権限は、呼び出されたワークフローによってダウングレードのみ可能です。
- [ ] 呼び出し元のワークフローから渡される `GITHUB_TOKEN` の権限は、呼び出されたワークフローによって昇格のみ可能です。
- [ ] 呼び出し元のワークフローから渡される `GITHUB_TOKEN` の権限は、呼び出されたワークフローによってダウングレードおよび昇格の両方が可能です。
- [ ] 呼び出し元のワークフローから渡される `GITHUB_TOKEN` の権限は、呼び出されたワークフローによってダウングレードも昇格も不可能です。
