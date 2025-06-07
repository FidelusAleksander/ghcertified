---
question: "In job `deploy`, if you want to access binaries (containing your application) that were created in job `build` you should"
archetype: "questions"
title: "Question 047"
---


> https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#comparing-artifacts-and-dependency-caching

1. [x] upload the binaries as artifacts in `build` and download them in `deploy`
1. [ ] upload the binaries as artifacts in `deploy` and download them in `build`
1. [ ] cache the binaries in `build` and read the files from cache in `deploy`
1. [ ] cache the binaries in `deploy` and read the files from cache in `build`
