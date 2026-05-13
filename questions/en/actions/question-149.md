---
question: "What does writing to `GITHUB_STEP_SUMMARY` do?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#adding-a-job-summary"
---

```yaml
- name: "Write results of test suite"
  run:
    echo "The results of the testing suite are:" >> $GITHUB_STEP_SUMMARY
```
- [x] Adds this line to the job summary
> Writing to `GITHUB_STEP_SUMMARY` adds to the job summary, which can be used as a streamlined version of a workflow log.
- [ ] Adds this line as a subtitle to the step name in the GitHub Actions UI
- [ ] Adds this line to the built-in artifact `github-steps-summary.md`
- [ ] Prints this line as a step-level debug message
> To print a debug message in a step, you must use the `::debug::` syntax. See the "Setting a debug message" section in the linked documentation.