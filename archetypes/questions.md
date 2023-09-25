---
title: "{{ replace .File.ContentBaseName "-" " " | strings.FirstUpper }}"
date: {{ .Date }}
draft: false
subject: []
---

# Single Choice
> 
1. [x]
1. [ ] 
1. [ ] 
1. [ ] 

# Multi Choice
> 
- [x] 
- [x] 
- [ ] 
- [ ] 
