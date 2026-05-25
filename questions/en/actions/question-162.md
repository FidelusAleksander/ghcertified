---
question: "Mercedes wants to publish a Docker container action she has created to the GitHub Actions Marketplace. What files does she need at a minimum to do so?"
documentation: "https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace"
---

- [x] `action.yml`
> An `action.yml` file is required for an action to be published to the Marketplace, regardless of type.
- [x] A `Dockerfile`, if the image is located locally and must be built during the workflow run
> Docker container actions only require a `Dockerfile` if the image has to be created from scratch and cannot be pulled from an image registry. The value of `runs.image` in `action.yml` must be the path to `Dockerfile`
- [ ] A `Dockerfile`, if the image is to be referenced from an image registry
> When referencing an image in an image registry, no `Dockerfile` is needed. The value of the `runs.image` key in  `action.yml` must be prefixed with `docker://` followed by the image name.  See the "runs" and "runs.image" sections in the [documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax#runsimage) for more information. 
- [ ] `README.md`
> While a `README.md` file is recommended by GitHub for Actions being published to the Marketplace, it is not a strict requirement.
- [ ] `.dockerignore`
- [ ] `CONTRIBUTING.md`