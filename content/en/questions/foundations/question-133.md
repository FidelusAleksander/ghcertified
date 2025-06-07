---
archetype: "questions"  
title: "Question 133"  
question: "Which advanced search operator combination would you use to find public repositories with more than 100 stars that mention 'docker' in their name?"  
draft: false  
---

> **More info**: [Searching repositories](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)

1. [x] `in:name docker stars:>100 is:public`  
  > **Correct**. This will find all public repositories that have 'docker' in their name and more than 100 stars.  
1. [ ] `docker in:description stars:<100 is:public`  
1. [ ] `is:public name:docker stars:100`  
  > This is missing the range operator (`>`) for stars, and `name:docker` is not a valid syntax.  
1. [ ] `topic:docker stars:>100 in:readme`  
  > This searches within topics or readmes, not the repository name.  
