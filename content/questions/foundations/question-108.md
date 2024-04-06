---
archetype: "questions"
title: "Question 108"
question: "What is one of the main benefits for using a Personal Access Token (PAT) instead of a standard username and password in GitHub authentication?"
draft: false
---


> https://learn.microsoft.com/en-us/training/modules/github-introduction-administration/3-how-github-authentication-works
1. [ ] PATs can be managed by the organization and enterprise.
> The study guide does not mention that organizations and enterprises can manage PATs.  Those entities can manage other forms of authentication, such as LDAP, SAML, and SSH keys.
1. [ ] PAT is an extra layer of security used when logging into websites or apps. With PAT, users have to sign in with their username and password and provide another form of authentication that only they have access to.
> This is a description of multi-factor or two-factor authentication.
1. [x] PAT can be used for authentication to GitHub when using the GitHub API or the command line. Users generate a token via the GitHub's settings option, and tie the token permissions to a repository or organization. 
1. [ ] PAT lets you authenticate GitHub Enterprise Server against your existing accounts and centrally manage repository access. 
> This is a description of LDAP's benefits for GitHub, not PAT.