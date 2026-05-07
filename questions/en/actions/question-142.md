---
question: "Which of the following answers is correct regarding installation access tokens?"
documentation: "https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation#using-an-installation-access-token-to-authenticate-as-an-app-installation"
---

- [x] Installation access tokens are short-lived tokens ideal for automation activities, but require setting up a Github App.
- [x] `GITHUB_TOKEN` is a type of installation access token.
> `GITHUB_TOKEN` is a GitHub App installation access token that is automatically generated for every workflow run. See the  [documentation](https://docs.github.com/en/actions/concepts/security/github_token) for additional details.
- [x] The `actions/create-github-app-token` can be called within workflows to create an installation access token available for immediate use. 
- [ ] The `actions/create-github-app-token` can be called within workflows to create an installation access token, but the installation access token can only be used in future runs of the workflow.
> Once created, an installation access can be used immediately. See the [official page for this action](https://github.com/actions/create-github-app-token) for additional details.
- [ ] Installation access tokens cannot be configued to act on behalf of their associated Github App. 
> Installation access tokens are often configured to act on behalf of their associated Github App. This can aid in auditing automated activity.
