---
question: "Mercedes wants to publish a Docker container action she has created to the GitHub Actions Marketplace. What files does she need at a minimum to do so?"
documentation: "https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace"
---

- [ ] `action.yml`
> An `action.yml` file is required for an action to be published to the Marketplace, regardless of type.
- [ ] A `Dockerfile`, if the image is located locally and must be built during the workflow run
> Docker container actions only require a `Dockerfile` if the image has to be created from scratch and cannot be pulled from an image registry. 
- [ ] A `Dockerfile`, if the image is to be referenced from an image registry
> When referencing an image in an image registry, no `Dockerfile` is needed. Registry-based images are referenced just like a local `Dockerfile`, via the `runs.image` key in the `action.yml` file.  See the "runs" and "runs.image" sections in the [documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax#runsimage) for more information. 
- [ ] `README.md`
> While a `README.md` file is recommended by GitHub for Actions being published to the Marketplace, it is not a strict requirement.
- [ ] `.dockerignore`
- [ ] `CONTRIBUTING.md`