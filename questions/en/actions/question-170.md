---
question: "Observe the values in `runs-on` key as seen in the below workflow job. Which is true regarding how the  the job will run?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow#using-custom-labels-to-route-jobs"
---
```yaml
jobs:
    fire_emblem_deploy:
        name: "Deploy the 'Fire Emblem' application"
        runs-on: [self-hosted,nes,linux]
```

- [x] The job will run on a self-hosted runner that has all the labels applied.
- [ ] The job will run on a self-hosted runner that has any of the labels applied.
> Runner labels apply cumulatively; a workflow will not run on a runner that only has some of the labels. All of them are needed.
- [ ] The job will still be able to run on GitHub-hosted runners, since they can have custom labels applied to them
> GitHub-hosted runners cannot have custom labels applied to them. They must be referenced with the [predefined labels](https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job#standard-github-hosted-runners-for-public-repositories) they have been assigned.
- [ ] The job will run on a runner (self-hosted or GitHub-hosted, whichever is first available) with the name `self-hosted,nes,linux`
> `runs-on` points to runner labels, not names.
