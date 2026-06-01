---
question: "Manuela is setting up self-hosted runners for her organization, which has heavily restricted communication with IP addresses. How can she ensure the self-hosted runners can communicate with GitHub?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list"
---

- [x] Adding the self-hosted runners' IP address(es) to the organization's IP allow list
> Self-hosted runners communicate with GitHub to perform various activity, as seen in the [documentation](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/runners/self-hosted-runners#communication). To allow this communication, you must add the self-hosted runner's IP address(es) to the IP allow list
- [ ] Adding the self-hosted runners' operating system to the organization's operating system allow list
- [ ] Adding the `.ip-exception` file to the top-level of the self-hosted runner's directory structure
- [ ] Switch to GitHub-hosted standard runners, since self-hosted runners will be blocked if IP allow lists are enabled
- [ ] Selecting the 'Allow access from self-hosted runners' checkbox in the organization's IP allow list settings