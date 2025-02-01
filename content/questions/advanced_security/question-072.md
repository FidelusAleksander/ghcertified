---
archetype: "questions"
title: "Question 072"
question: "What are the differences when running CodeQL database creation for compiled and interpreted languages? (Choose two.)"
---



> https://codeql.github.com/docs/codeql-overview/about-codeql/#database-creation
- [x] For compiled languages, extraction works by monitoring the build process. All information is collected each time the compiler is invoked to process a source file.
- [x] For interpreted languages, the extractor runs directly on the source code.
- [ ] For interpreted languages, extraction works by monitoring the build process. All information is collected each time the interpreter is invoked to process a source file.
- [ ] For compiled languages, the extractor runs directly on the source code.
- [ ] For compiled languages, the extractor runs on the executable file.
- [ ] For interpreted languages, the extractor runs on the executable file.
