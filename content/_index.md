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
shuffle_questions: true
---

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
