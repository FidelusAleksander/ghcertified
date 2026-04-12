---
question: "Which advanced search operator combination would you use to find public repositories with more than 100 stars that mention 'docker' in their name?"  
draft: false  
documentation: "https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories"
---

- [x] `in:name docker stars:>100 is:public`  
> **Correct**. This will find all public repositories that have 'docker' in their name and more than 100 stars.  
- [ ] `docker in:description stars:<100 is:public`  
- [ ] `is:public name:docker stars:100`  
> This is missing the range operator (`>`) for stars, and `name:docker` is not a valid syntax.  
- [ ] `topic:docker stars:>100 in:readme`  
> This searches within topics or readmes, not the repository name.  
