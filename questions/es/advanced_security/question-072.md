---
question: "¿Cuáles son las diferencias al ejecutar la creación de bases de datos de CodeQL para lenguajes compilados e interpretados?"
documentation: "https://codeql.github.com/docs/codeql-overview/about-codeql/#database-creation"
---

- [x] Para los lenguajes compilados, la extracción funciona monitoreando el proceso de compilación. Toda la información se recopila cada vez que el compilador se invoca para procesar un archivo fuente.
- [x] Para los lenguajes interpretados, el extractor se ejecuta directamente en el código fuente.
- [ ] Para los lenguajes interpretados, la extracción funciona monitoreando el proceso de compilación. Toda la información se recopila cada vez que el intérprete se invoca para procesar un archivo fuente.
- [ ] Para los lenguajes compilados, el extractor se ejecuta directamente en el código fuente.
- [ ] Para los lenguajes compilados, el extractor se ejecuta en el archivo ejecutable.
- [ ] Para los lenguajes interpretados, el extractor se ejecuta en el archivo ejecutable.
