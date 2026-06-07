---
question: "The following workflow that calls a reusable workflows in one of its jobs. The reusable workflow has `permissions` defined at workflow level as seen below. What will be the result of calling the reusable workflow?"
documentation: "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
---

```yaml
# caller workflow
on:
    issues:
        types: [opened]
    
    permissions:
        contents: write

    jobs:
        issue_creator:
            runs-on: ubuntu-latest
            permissions:
                contents: read
            uses: ./.github/workflows/issue-creator.yml

# reusable workflow (issue-creator.yml)
on:
    workflow_call:

    permissions:
        contents: write

    jobs:
        create_issue:
            runs-on: ubuntu-latest
            steps: 
                env: GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}    
                -run: gh issue create --title "Issue report" --body "Hello!" --repo $GITHUB_REPOSITORY

```
- [x] The reusable workflow will return an error, since the job that called it only has `contents:read` permissions
> NEED TO TEST THIS
- [ ] The reusable workflow will create an issue in the caller workflow's repository titled `"Issue Report"`
> This would occur if the `issue_creator` job had `contents:write` permissions, which would be the reusable workflow would inherit
- [ ] The reusable workflow will create an issue in its own repository titled `"Issue Report"`
- [ ] The reusable workflow will not be called, since reusable workflows must be in a subfolder of `.github/workflows`
> All workflows must be located in the `.github/workflows` directory. 
- [ ] Both the caller and reusable workflow will not get called, because `issues` is not an available trigger for GitHub Actions. 
> `issues` is a standard event trigger, as seen in the documentation TODO DOCS!