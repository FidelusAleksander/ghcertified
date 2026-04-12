---
question: "What steps are involved in creating a self-hosted runner group for an organization on GitHub?"
documentation: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups"
---

- [x] Navigate to organization settings, select Actions, click Runner groups, create a new group, and assign a repository access policy.
- [ ] In the `.github` repository modify the `.gitconfig` file to specify runner groups and associated access policies.
- [ ] Contact GitHub support to request the creation of a runner group and provide a list of repositories for access configuration.
- [ ] Use a GitHub Actions workflow to automatically generate runner groups based on repository activity and usage patterns.
