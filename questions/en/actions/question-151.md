---
question: "Which should you use when passing information between jobs: job outputs or `GITHUB_ENV`?"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables#passing-values-between-steps-and-jobs-in-a-workflow"
---

- [x] Job outputs, because the value of environmental variables set via writing to `GITHUB_ENV` only applies to the current job.
> While `env` can be set at workflow-level (meaning its variables can be referenced by multiple jobs), this does not mean changing the value of the environmental variable persists beyond the job that changed it.
- [ ] `GITHUB_ENV`, because job outputs can only be set and referenced within the same job.
- [ ] Job outputs, because they are simpler to set up
> Setting up and referencing job outputs is more complicated than utilizing `GITHUB_ENV`. For example, job outputs require setting up an `outputs` block, adding an `id` to a step, and using `needs` to indicate dependencies.
- [ ] `GITHUB_ENV`, because using it to set environmental variables puts significantly less strain on the runner, reducing workflow runtime.