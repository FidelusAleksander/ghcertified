---
question: "¿Cómo sabe GitHub Dependency graph qué dependencias está utilizando tu proyecto?"
documentation: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#supported-package-ecosystems"
---

- [x] GitHub deriva automáticamente las dependencias a partir de los manifiestos y archivos de bloqueo comprometidos en el repositorio
- [x] Las dependencias se pueden agregar manualmente utilizando la Dependency submission API
- [ ] GitHub escanea el código del repositorio en busca de declaraciones de importación de paquetes externos
- [ ] Es necesario agregar un workflow de GitHub Actions que utilice la GitHub Action oficial `actions/dependency-graph` para agregar dependencias al gráfico cada vez que se realiza un nuevo commit al repositorio
