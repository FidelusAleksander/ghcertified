---
title: "Question 038"
draft: false
subject: []
---

# Which of these is a way using `action_state` in `step_two`? 
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
> https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable
1. [x] `run: echo "$action_state"`
1. [ ] `run: echo "${{ steps.step_one.outputs.action_state }}"`
> That would be the case if `action_state` was written to `$GITHUB_OUTPUT`
1. [ ] `run: echo "$steps.step_one.outputs.action_state"`
1. [ ] `run: echo "${{ action_state }}"`
