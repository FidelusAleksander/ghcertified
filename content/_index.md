---
title: "Quiz"
date: 2023-08-17T08:21:20+01:00
page: true
---

# Github Actions Quiz

Test Your knowledge in preparation for the **Github Actions** certification exam



{{< quizdown >}}

---
primary_color: steelblue
shuffle_questions: false
---
# In a workflow with multiple jobs, if job A fails then:
> https://docs.github.com/en/actions/using-workflows/about-workflows#creating-dependent-jobs
1. [x] the jobs that are dependent on job A are skipped
1. [ ] the jobs that are dependent on job A fail
1. [ ] the workflow immediately cancels all other jobs


# If job B requires job A to be finished you need to:
> https://docs.github.com/en/actions/using-workflows/about-workflows#creating-dependent-jobs
1. [x] you can use the needs keyword in job B to create this dependency
1. [ ] you can use the needs keyword in job A to create this dependency
1. [ ] you can use the requires keyword in job B to create this dependency
1. [ ] you can use the requires keyword in job A to create this dependency

# In a workflow with multiple jobs the default behaviour is:
> https://docs.github.com/en/actions/using-workflows/about-workflows#creating-dependent-jobs
1. [x] All jobs run in parallel at the same time
1. [ ] Jobs run in sequence


# Where should You store sensitive data such as passwords or certificates that will be used in workflows
1. [x] secrets
1. [ ] config variables
1. [ ] vault
1. [ ] environment variables

# Workflows are defined in which format
1. [x] yaml
1. [ ] toml
1. [ ] json
1. [ ] xml


# Which event is triggered by a webhook action from outside of the repository?
> https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows
1. [x] repository_dispatch
1. [ ] webhook_dispatch
1. [ ] workflow_dispatch
1. [ ] remote_dispatch
1. [ ] api_dispatch

# Which components are required for a workflow?
> https://docs.github.com/en/actions/using-workflows/about-workflows#workflow-basics
- [x] One or more events that will trigger the workflow
- [x] One or more jobs
- [ ] Workflow name
- [ ] Defined branches on which the workflow will run

# Which is true about workflows?
> https://docs.github.com/en/actions/using-workflows/about-workflows
- [x] Workflows can run one or multiple jobs at a time
- [x] Workflows can only be triggered manually, by an event or run on a schedule
- [x] Workflows have to be defined in the `.github/workflows` directory
- [ ] Workflows can only be run on a schedule
- [ ] Workflow can run one job at a time
- [ ] Workflows are written in any of `.yaml`, `.json` or `.toml` formats
- [ ] Workflows can be shared in Github Marketplace
  > Actions (not workflows) can be shared in Github Marketplace

# Which of these is not a valid event that could trigger a workflow?
> https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#about-events-that-trigger-workflows
1. [x] Cloning the repository
1. [ ] Commiting a file to master branch
1. [ ] A branch is created
1. [ ] Adding a label to a pull request


# Are Github Actions free for public repositories?
1. [x] Yes
1. [ ] No


# You can use **permissions** to modify the GITHUB_TOKEN permissions on:

- [x] Workflow level
- [x] Job level
- [ ] Step level


# What are the different permission levels You can assign to GITHUB_TOKEN in the permissions block?

> https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs

1. [x] none, write, read
1. [ ] read, write, delete
1. [ ] read, write

# Which statement is correct regarding passing permissions to reusable workflows

> https://docs.github.com/en/actions/using-workflows/reusing-workflows?

1. [x] The GITHUB_TOKEN permissions passed from the caller workflow can be only downgraded by the called workflow.
1. [ ] The GITHUB_TOKEN permissions passed from the caller workflow can be both downgraded and elevated by the called workflow.
1. [ ] The GITHUB_TOKEN permissions passed from the caller workflow can be neither downgraded or elevated by the called workflow.


{{< /quizdown >}}
