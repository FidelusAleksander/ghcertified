---
question: "`step` 内で値 `DOG` を持つ出力パラメータ `PET` を設定する正しい方法はどれですか？"
title: "質問 037"
---


> https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter
1. [x] `echo "PET=DOG" >> "$GITHUB_OUTPUT"`
1. [ ] `echo "DOG=PET" >> "$GITHUB_OUTPUT"`
1. [ ] `gh set-output "DOG=PET"`
1. [ ] `gh set-output "PET=DOG"`