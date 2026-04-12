---
question: "What is one of the main benefits for using a Personal Access Token (PAT) instead of a standard username and password for GitHub authentication?"
documentation: "https://learn.microsoft.com/en-us/training/modules/github-introduction-administration/3-how-github-authentication-works"
---

- [ ] PATs can be managed by the organization and enterprise.
> PAT's as the name suggests, are personal. Organizations and Enterprises can manage other forms of authentication, such as LDAP, SAML, and SSH keys.
- [ ] PAT is an extra layer of security used when logging into websites or apps. With PAT, users have to sign in with their username and password and provide another form of authentication that only they have access to.
> This is a description of multi-factor or two-factor authentication.
- [x] PAT can be used for authentication to GitHub when using the GitHub API or the command line. Users generate a token via the GitHub's settings option, and tie the token permissions to a repository or organization. 
- [ ] PAT lets you authenticate GitHub Enterprise Server against your existing accounts and centrally manage repository access. 
> This is a description of LDAP's benefits for GitHub, not PAT.
