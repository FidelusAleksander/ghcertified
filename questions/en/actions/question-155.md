---
question: "Marianne has a feature branch that contains her new workflow file, which is set to be triggered at 2 AM every day, using the syntax seen below. However, the workflow does not trigger as expected. Why might this be the case?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule"
---

```yaml
on:
    schedule:
        cron:
            "0 2 * * *"
```

- [x] The workflow file must exist on the default branch in order to be triggered by the `schedule` event
- [ ] The `cron` syntax is not scheduled correctly
> `"0 2 * * *"` in CRON syntax means "fire off every day at 2 AM." Even if the schedule was set up incorrectly, the workflow would still not be triggered since it is not present on the default branch.
- [ ] `schedule` cannot be the only event in the workflow. It must be paired with a repository-based event, such as `push`
- [ ] The `@daily` syntax was not used
> Non-standard CRON syntax like `@daily` is not supported by GitHub Actions. 
- [ ] The private repository containing the workflow has not had any repository activity in greater than 60 days, automatically disabling the workflow.
>  This automatic disabling activity only occurs in public repositories, not private repositories.