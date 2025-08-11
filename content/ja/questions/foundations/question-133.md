---
title: "質問 133"  
question: "名前に 'docker' を含み、100スター以上のPublic Repositoryを検索する高度な検索演算子の組み合わせはどれですか？"  
draft: false  
---

> **詳細**: [Searching repositories](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)

1. [x] `in:name docker stars:>100 is:public`  
  > **正解**。これは名前に 'docker' を含み、100スター以上のPublic Repositoryをすべて検索する。  
1. [ ] `docker in:description stars:<100 is:public`  
1. [ ] `is:public name:docker stars:100`  
  > スター数に対する範囲演算子 (`>`) が欠けており、`name:docker` は有効な構文ではない。  
1. [ ] `topic:docker stars:>100 in:readme`  
  > これはトピックやREADME内を検索するもので、Repository名を検索するものではない。