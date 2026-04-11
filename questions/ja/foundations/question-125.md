---
title: "質問 125"  
question: "本文に「fix」を含む、ラベル`test`が付いたすべてのOpen Issueを検索するクエリはどれですか？"  
draft: false  
---

> **詳細**: [Searching issues and pull requests](https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests)

1. [ ] `is:pr is:open label:test "fix"`  
1. [ ] `is:issue in:comments label:test "fix"`  
1. [x] `is:issue is:open label:test "fix"`  
1. [ ] `type:issue label:test is:open body:"fix"`