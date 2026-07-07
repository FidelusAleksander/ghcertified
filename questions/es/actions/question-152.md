---
question: "Complete la frase: Al usar ejecutores auto-hospedados, la memoria caché de herramientas ___"
documentation: "https://docs.github.com/en/enterprise-server@3.21/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access"
---

- [x] comienza vacía y debe ser poblada para guardar herramientas entre ejecuciones
> Las memorias caché de herramientas permiten almacenar en caché diferentes versiones de herramientas, lo que habilita una actividad más rápida para los ejecutores auto-hospedados. Sin memorias caché de herramientas, los ejecutores auto-hospedados que usan `actions/setup-*` tardarán más en ejecutarse.
- [ ] comienza igual que los ejecutores alojados en GitHub, ya que está pre-poblada con ciertas herramientas
> Aunque los ejecutores alojados en GitHub vienen con ciertas herramientas preinstaladas, este no es el caso de los ejecutores auto-hospedados.
- [ ] comienza con las mismas herramientas que los ejecutores alojados en GitHub, así como una selección de herramientas personalizadas para mejorar la gestión de ejecutores auto-hospedados
- [ ] no se puede poblar
