---
question: "How can you ensure your self-hosted or larger GitHub hosted runners can communicate with GitHub when using an IP allow list?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/admin/configuration/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list#using-github-actions-with-an-ip-allow-list"
---

- [x] Add the IP address or IP address range of your runners to the IP allow list configured for your enterprise
- [ ] Disable the IP allow list for GitHub Actions runners
- [ ] Register the runners in Enterprise > Network security > Actions settings
- [ ] Use a VPN for all runners to bypass the IP allow list
