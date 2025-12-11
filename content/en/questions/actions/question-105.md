---
question: "Which of the following statements accurately describes the behavior of workflow jobs referencing an environment's protection rules?"
title: "Question 105"
---


> https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment
1. [x] workflow jobs won't start until all the environment's protection rules pass
1. [ ] workflow jobs will start immediately and protection rules are evaluated during execution
1. [ ] workflow jobs will start if at least one protection rule passes
1. [ ] workflow jobs will fail if protection rules are configured
> A job also cannot access secrets that are defined in an environment until all the deployment protection rules pass
