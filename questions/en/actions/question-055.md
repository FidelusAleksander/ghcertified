---
question: "A workflow was initially run on `commit A` and failed. You fixed the workflow with the subsequent `commit B`. When you re-run that workflow it will run with code from which commit?"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs"
---

- [x] It will run with code from `commit A`
- [ ] It will run with code from `commit B`
> Re-running a workflow uses the same commit SHA and Git ref of the original event that triggered the workflow run.
- [ ] You cannot re-run workflows in GitHub Actions. You have to trigger a new workflow which will run with latest changes
- [ ] It will trigger two workflows, one with code from `commit A` and one with code from `commit B`
