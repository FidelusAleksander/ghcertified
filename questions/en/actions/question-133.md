---
question: "Why use a commit SHA versus a tag to pin an action?"
documentation: "https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions"
---

- [x] Commit SHAs are more secure
> Commit SHAs are more secure because they are currently the only way to use an action as an immutable release
- [x] Commit SHAs are immutable, whereas tags have the potential to be changed
> [Tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging) are pointed to specific commits. Their reference can be changed, which is not always obvious. Tag-related vulnerabilities can be mitigated by enabling [immutable releases](https://docs.github.com/en/code-security/concepts/supply-chain-security/immutable-releases), but a commit SHA will always point to the same commit and is immutable.
> Re-running a workflow uses the same commit SHA and Git ref of the original event that triggered the workflow run.
- [ ] Commit SHAs are more convenient to use as opposed to tags
> While more secure, tags are generally easier to use.
- [x] Commit SHAs are guaranteed to point to the exact same code every time, tags are not
- [ ] Commit SHAs are more difficult to trace in an audit, making it difficult for bad actors to determine how an action's code factors in overall processes.
> Commit SHAs always point to the same commit. When pinning an action to a SHA, the SHA is explicitly referenced, meaning you can find the corresponding commit in the action's repository. These factors make auditing easier.
> Tags can have their references changed, and this is not always obvious. This can result in confusing scenarios when the tag points to a new commit, because the code referencing the action does not appear to have changed. Thus, in audit scenarios, you will have to figure out what commit the tag was pointing to and what it is currently pointed to.