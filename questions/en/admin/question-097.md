---
question: "Your GitHub Actions workflow runs on every push to main. You want to keep checkout fast by downloading only the minimum Git history required, but a later step needs to run `git diff HEAD^ HEAD`. Which `actions/checkout` configuration should you use?"
documentation: "https://github.com/actions/checkout"
---

- [ ] `fetch-depth: 0`
> `fetch-depth: 0` fetches the entire Git history, which satisfies the diff requirement but is slower than fetching only the required commits.
- [ ] `fetch-depth: 1`
> `fetch-depth: 1` fetches only the single commit being checked out (the default behavior), so `HEAD^` does not exist.
- [x] `fetch-depth: 2`
> `fetch-depth: 2` fetches the current commit and its immediate parent (`HEAD^`), which is the minimum depth required.
- [ ] `fetch-depth: 5`
> `fetch-depth: 5` fetches 5 commits, which works but downloads more history than the minimum required.
