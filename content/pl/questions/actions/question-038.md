---
question: "Który z poniższych jest sposobem użycia `action_state` w `step_two`?"
title: "Pytanie 038"
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
> To miałoby miejsce, gdyby `action_state` zostało zapisane do `$GITHUB_OUTPUT`
1. [ ] `run: echo "$steps.step_one.outputs.action_state"`
1. [ ]
