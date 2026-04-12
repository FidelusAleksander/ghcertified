---
question: "Which of these is a proper way of setting an output parameter `PET` with a value of `DOG` in a `step`."
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter"
---

- [x] `echo "PET=DOG" >> "$GITHUB_OUTPUT"`
- [ ] `echo "DOG=PET" >> "$GITHUB_OUTPUT"`
- [ ] `gh set-output "DOG=PET"`
- [ ] `gh set-output "PET=DOG"`
