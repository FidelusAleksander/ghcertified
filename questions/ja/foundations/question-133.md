---
question: "100以上のスターを持つ公開リポジトリで、名前に 'docker' を含むものを見つけるために使用すべき高度な検索オペレーターの組み合わせはどれですか？"  
draft: false  
documentation: "https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories"
---

- [x] `in:name docker stars:>100 is:public`  
> **正解**。これにより、名前に 'docker' を含み、100以上のスターを持つ公開リポジトリが見つかります。  
- [ ] `docker in:description stars:<100 is:public`  
- [ ] `is:public name:docker stars:100`  
> スターに関する範囲オペレーター（`>`）が欠けており、`name:docker` は有効な構文ではありません。  
- [ ] `topic:docker stars:>100 in:readme`  
> これはトピックまたはREADME内を検索するものであり、リポジトリ名内を検索するものではありません。  
