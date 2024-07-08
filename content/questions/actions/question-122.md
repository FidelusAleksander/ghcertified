---
archetype: "questions"
title: "Question 122"
question: "What are the scopes defined for custom variables in a workflow? (choose three)"
draft: false
---


> https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow
- [x] The entire workflow, by using `env` at the top level of the workflow file
- [x] The contents of a job within a workflow, by using `jobs.<job_id>.env`
- [x] A specific step within a job, by using `jobs.<job_id>.steps[*].env`
- [ ] All the jobs within a workflow, by using `jobs.env`
- [ ] The entire workflow, by using `custom.env` at the top level of the workflow file
- [ ] A specific environment in the repository, by using `environment.<environment_id>.env` at the top level of the workflow file
