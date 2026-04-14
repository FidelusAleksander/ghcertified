---
question: "次のうち、`step` で出力パラメーター `PET` に値 `DOG` を設定する適切な方法はどれですか。"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter"
---

- [x] `echo "PET=DOG" >> "$GITHUB_OUTPUT"`
- [ ] `echo "DOG=PET" >> "$GITHUB_OUTPUT"`
- [ ] `gh set-output "DOG=PET"`
- [ ] `gh set-output "PET=DOG"`

