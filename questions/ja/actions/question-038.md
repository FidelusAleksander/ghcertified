---
question: "`step_two` で `action_state` を使用する方法として正しいのはどれですか？"
title: "質問 038"
---

```yaml
  steps:
    - name: Set the value
      id: step_one
      run: |
        echo "action_state=yellow" >> "$GITHUB_ENV"
    - name: Use the value
      id: step_two
      run: ?
```
> https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#example-of-writing-an-environment-variable-to-github_env
1. [x] `run: echo "$action_state"`
1. [ ] `run: echo "${{ steps.step_one.outputs.action_state }}"`
> これは `action_state` が `$GITHUB_OUTPUT` に書き込まれている場合
1. [ ] `run: echo "$steps.step_one.outputs.action_state"`
1. [ ] `run: echo "${{ action_state }}"`