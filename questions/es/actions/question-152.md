---
question: "Complete la frase: Al utilizar runners autohospedados, la caché de herramientas ___"
documentation: "https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access"
---

- [x] comienza vacía y debe llenarse para guardar herramientas entre ejecuciones
> Las cachés de herramientas permiten almacenar en caché diferentes versiones de herramientas, lo que posibilita una actividad más rápida de los runners autohospedados. Sin cachés de herramientas, los runners autohospedados que utilizan `actions/setup-*` tardarán más en ejecutarse.
- [ ] comienza igual que los runners alojados por GitHub, es decir, pre-poblada con ciertas herramientas
> Aunque los runners alojados por GitHub vienen con ciertas herramientas preinstaladas, este no es el caso de los runners autohospedados.
- [ ] comienza con las mismas herramientas que los runners alojados por GitHub, así como una selección de herramientas personalizadas para mejorar la gestión de runners autohospedados
- [ ] no puede ser poblada
