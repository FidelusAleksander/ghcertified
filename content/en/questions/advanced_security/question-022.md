---
archetype: "questions"
title: "Question 022"
question: "Your company has internal secrets that should not be pushed to GitHub repositories. The pattern of these secrets is not known by GitHub and therefore is not detected by secret scanning. What can companies do to protect their developers from accidentally pushing these secrets to repositories in their GitHub Organization?"
---


> https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization
1. [x] Define regex patterns for these secrets and enable custom patterns for secret scanning for the organization.
1. [ ] The company should join the GitHub partner program so the pattern of the companies secrets is recognized.
> GitHub partner program is meant for service providers which distribute secrets outside of their organization (e.g cloud providers). It's not meant for internal secrets of a single organization.
1. [ ] Define custom GitHub Actions workflows for repositories in the organization that will scan for these secrets.
1. [ ] In all repositories include `secret_scanning.yml` file which will define these custom secrets that should be scanned for.
> `secret_scanning.yml` file that can be used to disable secret scanning for specific files or directories. 
