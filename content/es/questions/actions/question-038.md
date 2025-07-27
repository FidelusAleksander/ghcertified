---
question: "¿Cuál de estas es una forma de usar `action_state` en `step_two`? "
title: "Pregunta 038"
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
> Ese sería el caso si `action_state` se escribiera en `$GITHUB_OUTPUT`
1. [ ] `run: echo "$steps.step_one.outputs.action_state"`
1. [ ] `run: echo "${{ action_state }}"`

