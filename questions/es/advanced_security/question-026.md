---
title: "Pregunta 026"
question: "¿Cómo sabe GitHub Dependency graph qué dependencias está utilizando tu proyecto? (Elige dos.)"
---




> https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#supported-package-ecosystems
- [x] GitHub deriva las dependencias automáticamente a partir de los manifiestos y archivos lock comprometidos en el repository
- [x] Las dependencias pueden añadirse manualmente usando la Dependency submission API
- [ ] GitHub escanea el código del repository en busca de declaraciones de importación de paquetes externos
- [ ] Es necesario agregar un GitHub Actions workflow que use el `actions/dependency-graph` GitHub Action oficial para añadir dependencias al gráfico siempre que se realice un nuevo commit en el repository
