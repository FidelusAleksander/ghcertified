---
question: "Which of these is a way of using `action_state` in `step_two`? "
archetype: "questions"
title: "Question 038"
draft: false
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
> That would be the case if `action_state` was written to `$GITHUB_OUTPUT`
1. [ ] `run: echo "$steps.step_one.outputs.action_state"`
1. [ ] `run: echo "${{ action_state }}"`
