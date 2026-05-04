---
question: "How do you run custom JavaScript scripts directly in a GitHub Actions workflow?"
documentation: "https://github.com/marketplace/actions/github-script"
---

- [x] Via the `actions/github-script` action
> `actions/github-script` allows you to write and leverage inline JavaScript to make API calls and access workflow context. To use `actions/github-script`, you call it like any other action as seen in the [documentation](https://github.com/actions/github-script) 
- [ ] By enabling the 'Allow custom JavaScript scripts' configuration in the Actions settings of a repository
> There is no 'Allow custom JavaScript scripts' configuration in the Actions settings of a repository.
- [ ] By enabling the 'Allow custom JavaScript scripts' configuration in the Actions settings of an organization
> There is no 'Allow custom JavaScript scripts' configuration in the Actions settings of a repository. While you may have to enable settings like 'Allow actions created by Github' in an organization's Action settings to use official Github Actions, this is not only related to `actions/github-script`. 
- [ ] Write the contents of a script block to the `GITHUB_SCRIPT` environmental variable
> `GITHUB_SCRIPT` is not a default Github Actions environmental variable. A list of default environmental variables can be found in the [documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/variables)
- [ ] In a JavaScript Action, set the `using` key to `'github-script'`
> JavaScript Actions must have their `using` key set to `node*` where * is a supported version of Node.js.  Generally, JavaScript Actions do not have a need for `actions/github-script`.