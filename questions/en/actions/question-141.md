---
question: "Why might you use `hashFiles` when utilizing `actions/cache`?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#hashfiles"
---

- [x] If a cache key contains the dependencies file wrapped in `hashFiles`, the key changes when the dependencies file is updated, which helps keep it up to date.
> `hashFiles` is a built-in Github function that creates a hash of the specified path. Using it to compose a cache key causes the hash to be regenerated, which in turn updates the cache key. The official [Dependency Caching Reference](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching#example-using-the-cache-action) documentation shows how to use `hashFiles` as part of a cache key.
- [ ] The `hashFiles` input of `actions/cache` allows Windows runners to save or restore caches that can be restored or saved respectively on other platforms.
> `hashFiles` is not a `actions/cache` input. The [`enableCrossOsArchive`](https://github.com/actions/cache#inputs) input is what enables this Windows-runner activity.
- [ ] When using `hashFiles` as part of a cache key, if there is a cache miss, `hashFiles` gives additional debug info.  
- [ ] If the `hashFiles` input of `actions/cache` is `true`, then an additional step will be generated in the caller workflow. This workflow step prints the value of the SHA-256 hash of the cache key for reference purposes.  
> `hashFiles` is not a `actions/cache` input. Additionally, creating a hash of the cache key would not be useful in most situations.
