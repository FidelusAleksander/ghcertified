---
question: "Qual dessas é uma maneira de usar `action_state` em `step_two`? "
title: "Question 038"
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
> Isso seria o caso se `action_state` tivesse sido escrito para `$GITHUB_OUTPUT`
1. [ ] `run: echo "$steps.step_one.outputs.action_state"`
1. [ ] `run: echo "${{ action_state }}"`
