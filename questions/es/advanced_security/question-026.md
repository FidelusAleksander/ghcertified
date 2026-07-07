---
question: "¿Cómo sabe el gráfico de dependencias de GitHub qué dependencias está utilizando tu proyecto?"
documentation: "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph#supported-package-ecosystems"
---

- [x] GitHub deriva las dependencias automáticamente a partir de los archivos de manifiesto y de bloqueo comprometidos en el repositorio
- [x] Las dependencias pueden añadirse manualmente utilizando la API de envío de dependencias
- [ ] GitHub escanea el código del repositorio en busca de declaraciones de importación de paquetes externos
- [ ] Es necesario agregar un flujo de trabajo de GitHub Actions que utilice la acción oficial de GitHub `actions/dependency-graph` para agregar dependencias al gráfico cada vez que se envía un nuevo commit al repositorio
