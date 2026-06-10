---
question: "You need to ensure that your `prod` environment requires manual approvals before deploys can proceed. Out of the following options, which are true regarding how this is set up?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments#required-reviewers"
---

- [x] If you list required reviewers, only one of them needs to approve to continue with the deployment.
- [x] You can prevent self-reviews in the event the person who wants to deploy is also a required reviewer.
- [ ] If you list required reviewers, all of them need to approve to continue with the deployment.
> Surprisingly only 1 of the required reviewers needs to approve the workflow job. To enforce this behavior, you would need to create a custom deployment protection rule via a GitHub App.
- [ ] You cannot prevent self-reviews, but you can set up alerts to see who triggered the deployment.
- [ ] Only individual users can be assigned as required reviewers, not teams.
> Both individual users and teams can be assigned as required reviewers
- [ ] Required reviewers need at least `write` access to the repository in order to approve.
> Required reviewers need at least `read` access