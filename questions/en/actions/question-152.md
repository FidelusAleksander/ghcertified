---
question: "Fill in the blank: When using self-hosted runners, the tool cache ___"
documentation: "https://docs.github.com/en/enterprise-server@3.21/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access"
---

- [x] starts off empty and must be populated in order to save tools between runs
> Tool caches allow you to to cache different versions of tools, which enables faster self-hosted runner activity. Without tool caches, self-hosted runners that use `actions/setup-*` will take longer to execute.
- [ ] starts off the same as GitHub-hosted runners in that it is pre-populated with certain tools
> While GitHub-hosted runners do come with certain tools pre-installed, this is not the case for self-hosted runners
- [ ] starts with the same tools GitHub-hosted runners do, as well as a selected assortment of custom tools to enhance self-hosted runner management
- [ ] cannot be populated
