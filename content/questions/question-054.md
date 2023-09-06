---
title: "Question 054"
date: 2023-09-04T11:43:20+02:00
draft: false
subject: []
---

# When creating custom Github Actions - in what file all the action `metadata` has to be defined? 

Metadata such as name or description of the action, the outputs or required inputs etc
> https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions
1. [x] In the `action.yml` or `action.yaml` file in the action repository
1. [ ] In the repository `README` file
> While it's good practice to do that, it's not a requirement for the action to work
1. [ ] It's edited in Github Marketplace UI when published for sharing
1. [ ] In the `action.yml` or `action.yaml` file in the action repository, but it is not required if the action is not meant to be shared and used by the public
> All actions require the metadata file.
