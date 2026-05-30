---
question: "JavaScript actions and `actions/github-script` both use JavaScript. Why should you use `actions/github-script` versus creating your own JavaScript action?"
documentation: "https://github.com/actions/github-script"
---

- [x] `actions/github-script` should be used for short inline scripts
- [x] `actions/github-script` should be used when you want to use a pre-authenticated client to interact with the GitHub API.
- [x] JavaScript actions should be used when you want a custom reusable action to be used across repositories 
- [ ] JavaScript actions should be used for short inline scripts
- [ ] `actions/github-script` should be used when you need to utilize a fine-tuned Node.js environment with several specific dependencies
> While you can install modules for `actions/github-script` to use before calling it, if several dependencies are needed, this results in several steps in the workflow. `actions/github-script` also does not allow you to change the Node.js version; you are bound to the one it defines.
- [ ] JavaScript actions should be used when you want a low-overhead solution to making GitHub API calls.
> JavaScript actions are not low-overhead; they require making an `action.yml` file, which in turn must be stored in its own folder or even its own repository, depending on the approach. `actions/github-script` comes with a pre-authenticated client that makes it easy to make GitHub API calls using a JavaScript-based approach.