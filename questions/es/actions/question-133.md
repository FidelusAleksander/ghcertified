---
question: "¿Por qué usar un SHA de commit en lugar de una etiqueta para fijar una acción?"
documentation: "https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions"
---

- [x] Los SHAs de commit son más seguros
> Los SHAs de commit son más seguros porque actualmente son la única forma de usar una acción como un lanzamiento inmutable.
- [x] Los SHAs de commit son inmutables, mientras que las etiquetas tienen el potencial de ser cambiadas
> Las [etiquetas](https://git-scm.com/book/en/v2/Git-Basics-Tagging) apuntan a commits específicos. Su referencia puede ser cambiada, lo cual no siempre es evidente. Las vulnerabilidades relacionadas con etiquetas se pueden mitigar habilitando [lanzamientos inmutables](https://docs.github.com/en/code-security/concepts/supply-chain-security/immutable-releases), pero un SHA de commit siempre apuntará al mismo commit y es inmutable.  
> Al volver a ejecutar un workflow, se utiliza el mismo SHA de commit y la referencia de Git del evento original que desencadenó la ejecución del workflow.
- [ ] Los SHAs de commit son más convenientes de usar que las etiquetas
> Si bien son más seguros, generalmente las etiquetas son más fáciles de usar.
- [x] Los SHAs de commit garantizan apuntar al mismo código exacto cada vez, las etiquetas no
- [ ] Los SHAs de commit son más difíciles de rastrear en una auditoría, lo que dificulta que los actores malintencionados determinen cómo el código de una acción influye en los procesos generales.
> Los SHAs de commit siempre apuntan al mismo commit. Al fijar una acción a un SHA, el SHA se referencia explícitamente, lo que significa que puedes encontrar el commit correspondiente en el repositorio de la acción. Estos factores hacen que las auditorías sean más fáciles.  
> Las etiquetas pueden cambiar sus referencias, y esto no siempre es evidente. Esto puede resultar en escenarios confusos cuando la etiqueta apunta a un nuevo commit, porque el código que referencia la acción no parece haber cambiado. Por lo tanto, en escenarios de auditoría, tendrás que determinar a qué commit apuntaba la etiqueta y a cuál apunta actualmente.
