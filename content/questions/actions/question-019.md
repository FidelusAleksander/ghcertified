---
question: "Fill in the blank: When using `push` event trigger filters you can use <____> patterns to target multiple branches"
archetype: "questions"
title: "Question 019"
draft: false
---

> https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#using-filters-to-target-specific-branches-or-tags-for-push-events
1. [x] glob
1. [ ] regex
1. [ ] scheme
1. [ ] action

<details>
  <summary>Explaination</summary>

   
   Correct Answer: Glob: In GitHub Actions, glob patterns are used to specify multiple branches or paths that the workflow should target. Glob patterns allow you to match filenames or branch names using wildcard characters like * or ?.
   Example:
   
   ``` yaml

   on:
   push:
     branches:
       - 'release/*'  # Matches any branch that starts with 'release/'
       - 'feature/**' # Matches any branch in a nested structure under 'feature/'

   ```
   Regex: Regex, short for regular expressions, is a powerful tool for pattern matching, but it is not used in GitHub Actions for branch or path filters. GitHub Actions relies on glob 
   patterns instead of regex for these purposes.
   Action: The term "action" in GitHub Actions refers to the individual steps or commands that run as part of a workflow. It is unrelated to pattern matching or filters.
   Scheme: Scheme refers to a systematic plan or arrangement, often in contexts like URL schemes or schemas in databases. It has no relevance to pattern matching in GitHub Actions.



</details>









   
