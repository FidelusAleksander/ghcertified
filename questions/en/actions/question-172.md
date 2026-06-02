---
question: "Ingrid's organization has a subset of self-hosted Linux runners that should only be used by certain repositories. What is the best approach for Ingrid to enforce this behavior?"
documentation: ""
---

- [x] Create a new runner group, add the runners to the group, then select which repositories are allowed access to the group in the group settings.
- [ ] Create a new runner label, add the labels to the runners, then select which repositories are allowed access to the label in the label settings.
- [ ] Create a new runner label, add the labels to the runners, then make sure all workflows in the repositories have that label included in their `runs-on` field.
> Labels do not limit access to runners. Simply adding a label will not work; adding labels to `runs-on` can potentially effect the corresponding workflow from finding a runner to run on.
- [ ] Create a new runner group, select "Linux" as the OS, and use glob patterns to define which repositories are allowed access in the group settings.  