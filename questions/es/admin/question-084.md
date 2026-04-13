---
question: "¿Cuáles son algunos vectores potenciales de abuso al habilitar runners autohospedados en repositorios públicos?"
documentation: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#self-hosted-runner-security"
---

- [x] Programas maliciosos ejecutándose en la máquina
- [x] Escape del entorno sandbox del runner
- [x] Exposición del entorno de red
- [x] Persistencia de datos peligrosos
- [ ] La limpieza automática del entorno después de la ejecución del trabajo puede causar pérdida de datos
- [ ] Menor eficiencia computacional debido a las medidas de seguridad
- [ ] Integración limitada con servicios alojados por GitHub
