---
question: "Annette needs to write a workflow to publish a custom `npm` package that only members in her private organization will use. What should her workflow include?"
documentation: "https://docs.github.com/en/packages/learn-github-packages/publishing-a-package"
---

- [x] Logic to publish to GitHub Packages
> GitHub Packages is a package registry integrated with GitHub, making it easier to use if your needs are GitHub specific (such as with actions/workflows). GitHub Packages includes the ability to host packages privately.
- [x] A token with `write` permissions 
> Personal access tokens are supported across all GitHub Packages registries. Certain registries also support the use of `GITHUB_TOKEN`. See the [documentation](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries) for more information.  
- [x] Communication logic with the corresponding GitHub Packages registry `https://npm.pkg.github.com`
> Workflows involved with GitHub Packages often involve communication with the corresponding GitHub-hosted package registry, whose URL has the syntax of `https://<package-type>.pkg.github.com`. For an example, see the [npm registry documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).
- [ ] An `on:registry_package` event with no activity types specified
> The `on:registry_package` is related to packages, but a workflow does not need this event to publish a package.
- [ ] A token with `admin` permissions
> `admin` permissions are only needed when you need to delete a package hosted by GitHub Packages. The principle of least permissions should be followed; in this case, only `write` permissions are needed
- [ ] An `on:registry_package` event with `types:[published]` 
> The `on:registry_package` event can be configured to trigger a workflow when a package is published, but a workflow does not need this event to publish a package.