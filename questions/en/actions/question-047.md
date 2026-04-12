---
question: "In job `deploy`, if you want to access binaries (containing your application) that were created in job `build` you should"
documentation: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#comparing-artifacts-and-dependency-caching"
---

- [x] upload the binaries as artifacts in `build` and download them in `deploy`
- [ ] upload the binaries as artifacts in `deploy` and download them in `build`
- [ ] cache the binaries in `build` and read the files from cache in `deploy`
- [ ] cache the binaries in `deploy` and read the files from cache in `build`
