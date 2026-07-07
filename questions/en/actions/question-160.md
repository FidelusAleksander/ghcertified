---
question: "Why should you use OIDC when connecting a workflow to cloud providers?"
documentation: "https://docs.github.com/en/actions/concepts/security/openid-connect"
---

- [x] OIDC prevents you from having to keep cloud credentials as long-lived GitHub secrets 
- [x] OIDC involves the generation and use of short-lived tokens, which is more secure
- [ ] Cloud providers require the use of OIDC.
> OIDC is optional and recommended, but not strictly required.
- [ ] Using OIDC allows you to circumvent setting up trust policies with cloud providers
> You must set up trust policies with the cloud provider in order to use OIDC
- [ ] OIDC generates JSON web tokens (JWTs) that can be used across workflow jobs
> OIDC infrastructure involves creating JWTs that are unique for each workflow job
- [ ] Using OIDC within a workflow will automatically save that workflow's logs in cloud storage
> OIDC is concerned with security when connecting to cloud providers, not storage. Thus, it is not involved in saving workflow logs anywhere.    