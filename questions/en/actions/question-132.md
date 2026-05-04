---
question: "Which of the following are true regarding GitHub Enterprise Server (GHES)?"
documentation: "https://docs.github.com/en/enterprise-server/admin/overview/about-github-enterprise-server"
---

- [x] GHES workflows cannot access GitHub.com nor GitHub Marketplace actions by default. 
- [x] `actions/actions-sync` is primarily devoted to moving GitHub.com actions to a GHES instance.
> Syncing Actions from GitHub.com is mainly accomplished either via GitHub Connect or `actions-sync`. The `actions/actions-sync` tool is a [manual way](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) to perform this process. 
- [ ] GHES is allowed to use enhanced versions of GitHub-hosted runners.
> GHES does not have access to GitHub-hosted runners at all. This is seen in the [`actions/actions-sync` documentation](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)
- [ ] Using GitHub Connect, users can follow a manual process to access GitHub.com actions. This process must be done once per desired action.
> GitHub Connect allows automatic access to GitHub.com actions. Users must follow a setup process, but this generally only needs to be done once. See the [GitHub Connect documentation](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#enabling-automatic-access-to-public-githubcom-actions) for more details.
- [x] GitHub Enterprise Server instances are self-hosted, compared to GitHub Enterprise Cloud (GHEC) which is hosted and managed by GitHub.
> [GitHub Enterprise Server](https://docs.github.com/en/enterprise-server/admin/overview/about-github-enterprise-server) is a self-hosted version of the GitHub platform. [GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud) instances are hosted on a dedicated subdomain of GHE.com. All GHE.com subdomains are hosted by GitHub.