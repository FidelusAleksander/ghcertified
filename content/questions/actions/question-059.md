---
question: "Your open-source publicly available repository contains a workflow with a `pull_request` event trigger. How can you require approvals for workflow runs triggered from forks of your repository?"
archetype: "questions"
title: "Question 059"
draft: false
---

> https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks#about-workflow-runs-from-public-forks
1. [x] Setup required approvals for fork runs in the repository
1. [ ] Setup deployment protection rules for the repository
> Deployment protection rules are used for protecting environments
1. [ ] Setup branch protection rules for the repository
1. [ ] The workflow will not trigger for forks if using `pull_request` event. If you want to do that you should use `fork_pull_request` event trigger with `require-approval` flag.
