---
question: "Why might you use `hashFiles` when utilizing `actions/cache`?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#hashfiles"
---
```yaml
  - uses: actions/cache@v5
    with:
      path: ~/.npm
      key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
```
- [x] If a cache key contains the dependencies file wrapped in `hashFiles`, the key changes when the dependencies file is updated, which helps keep it up to date.
> `hashFiles` is a built-in Github function that creates a hash of the specified path. Using it to compose a cache key causes the hash to be regenerated, which in turn updates the cache key. The official [Dependency Caching Reference](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching#example-using-the-cache-action) documentation shows how to use `hashFiles` as part of a cache key.
- [ ] `hashFiles` is required for compatibility with Windows runners.
- [ ] When using `hashFiles` as part of a cache key, if there is a cache miss, `hashFiles` gives additional debug info.  
- [ ] When using `hashFiles` as part of a cache key, an additional step will be generated in the caller workflow. This workflow step prints the value of the SHA-256 hash of the cache key for reference purposes.  
> Creating a hash of the cache key would not be useful in most situations.
