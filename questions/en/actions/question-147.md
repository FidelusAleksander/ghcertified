---
question: "You have a base-64 encoded secret that you decode in a GitHub Actions workflow. How can you make sure the decoded secret does not show up in the workflow log accidentally?"
documentation: "https://docs.github.com/en/actions/reference/security/secure-use#use-secrets-for-sensitive-information"
---

- [x] Using `add-mask` in jobs where the decoded secret may be utilized.
> Using `add-mask` will redact values Github Actions does not detect as a secret. This needs to be done once per value, per job that utilizes the decoded secret.
- [ ] Nothing needs to be done since Github Actions infrastructure automatically redacts decoded secrets.
> It is not guaranteed that Github Actions will be able to automatically detect and redact transformed secrets per the [documentation](https://docs.github.com/en/actions/reference/security/secure-use#use-secrets-for-sensitive-information).   
- [ ] Avoiding the usage of print statements that contain the decoded secret, since this is the only way the decoded secret could appear in the workflow log
> While avoiding print statements that contain decoded secrets is recommended, decoded secrets may appear elsewhere in the workflow log, such as in messages relating to API calls.
- [ ] Using the built-in `addMask` function to redact the decoded secret in instances where it may be utilized.
> `addMask` is not a built-in function provided by Github Actions.