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
