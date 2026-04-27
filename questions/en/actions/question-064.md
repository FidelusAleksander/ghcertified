---
question: "How can organizations which are using GitHub Enterprise Server enable automatic syncing of third party GitHub Actions hosted on GitHub.com to their GitHub Enterprise Server instance?"
documentation: "https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect"
---

- [x] Using GitHub Connect
> When enabled, GitHub Connect will be used to automatically establish a secure connection between a GitHub Enterprise Server (GHES) instance and a GitHub Enterprise Cloud (GHEC) account (GHEC is hosted on GitHub.com). The GHEC account serves as a trusted (authenticated) identity GitHub.com uses to authorize the GHES instance to access GitHub.com-hosted actions.   
- [ ] GitHub Enterprise Server has access to all GitHub.com Actions by default
> GitHub Actions on GitHub Enterprise Server is designed to work in environments without full internet access. By default, workflows cannot use actions from GitHub.com and GitHub Marketplace.
- [ ] Using actions-sync tool
> While actions-sync can be used to sync individual action repositories from GitHub.com to an enterprise, this is a manual approach. See the [documentation](https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#about-the-actions-sync-tool) for more details.
- [ ] GitHub Enterprise Server (GHES) cannot use GitHub.com Actions because of its on-premise nature and no internet access.
> While workflows located on a GHES instance cannot use GitHub.com Actions nor GitHub Marketplace actions by default, this can be rectified via the use of GitHub Connect or actions-sync. 
