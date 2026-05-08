---
question: "Your organization wants to lower the retention period for stored artifacts, citing storage concerns. How can this be done at an organizational level?"
documentation: "https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization"
---

- [x] By navigating to the organization's Actions settings and editing the value of the "Artifact and log retention" setting
- [ ] By using self-hosted runners, creating a `.github/retention-policy.yml` file, and specifying the value of the `artifact-retention-period` key 
> Customizing artifact retention periods is not limited to self-hosted runners.  
- [ ] This cannot be done at an organizational level. All workflows that utilize `actions/upload-artifact` must use the required `retention-days` input.
> While the `retention-days` input can be used to customize the retention period for individual artifacts created by a workflow, this is inappropriate if trying to apply an organizational level blanket policy. Furthermore, the `retention-days` input is [optional, not required](https://github.com/actions/upload-artifact#inputs).
- [ ] This cannot be done: artifacts are strictly stored for 90 days across all systems implementing Github Actions. 
> The default retention period for artifacts is 90 days. It is possible to change this value in all systems implementing Github Actions. 