---
question: "W GitHub Actions, jeśli zdefiniujesz zarówno filtr branches, jak i paths, jaki będzie efekt uruchomienia workflow?"
title: "Pytanie 103"
---


> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore
1. [x] workflow zostanie uruchomiony tylko wtedy, gdy oba warunki `branches` i `paths` zostaną spełnione
1. [ ] workflow zostanie uruchomiony, gdy spełniony zostanie którykolwiek z warunków `branches` lub `paths`, ale zastosowany zostanie tylko pasujący filtr
1. [ ] workflow zostanie uruchomiony, gdy spełniony zostanie którykolwiek z warunków `branches` lub `paths`
1. [ ] workflow nie zostanie uruchomiony, gdy oba warunki `branches` i `paths` zostaną spełnione
