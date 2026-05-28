---
question: "¿Cuáles de las siguientes afirmaciones son ciertas al comparar los eventos pull_request y pull_request_target?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request"
---

- [x] El evento `pull_request` se ejecuta en el contexto del commit de fusión, mientras que `pull_request_target` se ejecuta en el contexto de la rama predeterminada del repositorio base.
> Para obtener más información sobre los commits de fusión, consulta la [documentación](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) de GitHub.
- [x] Los flujos de trabajo no se ejecutarán en la actividad de `pull_request` si hay un conflicto de fusión.
- [x] Los eventos `pull_request` y `pull_request_target` tienen tipos de actividad predeterminados: `opened`, `synchronize` y `reopened`.
- [ ] `pull_request` debe usarse con precaución, ya que los Pull Requests de forks permitirán que el flujo de trabajo acceda a todos los secretos dentro del repositorio, debido a que está asociado con la rama predeterminada.
> Esto es cierto para `pull_request_target`; `pull_request` no está asociado con la rama predeterminada y, por lo tanto, cuando es activado por un Pull Request de un fork, el flujo de trabajo tendrá acceso limitado a los secretos. Consulta la documentación enlazada anteriormente, específicamente la sección "pull_request_target" para obtener más información.
- [ ] Los flujos de trabajo no se ejecutarán en la actividad de `pull_request_target` si hay un conflicto de fusión.
- [ ] El evento `pull_request_target` debería usarse cuando deseas ejecutar código contenido en los archivos modificados de un Pull Request, para realizar tareas como comprobaciones de CI o ejecutar suites de prueba.
> `pull_request_target` se ejecuta en el contexto de la rama predeterminada del repositorio, lo que puede llevar a que se consulte y ejecute código no confiable mediante actividades como comprobaciones de CI o suites de prueba. Consulta la [documentación](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/security/secure-use#mitigating-the-risks-of-untrusted-code-checkout) para obtener más información. 
