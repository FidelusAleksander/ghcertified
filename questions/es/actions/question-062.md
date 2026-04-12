---
question: "Su organización define un secreto `SomeSecret`, sin embargo, cuando hace referencia a ese secreto en un workflow utilizando `${{ secrets.SomeSecret }}`, proporciona un valor diferente al esperado. ¿Cuál podría ser la razón de ello?"
documentation: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets"
---

- [x] El secreto `SomeSecret` también está declarado en el ámbito del repositorio
- [ ] El secreto `SomeSecret` también está declarado en el ámbito empresarial
> Si un secreto con el mismo nombre existe en múltiples niveles, el secreto en el nivel más bajo tiene prioridad.
- [ ] La expresión `${{ secrets.SomeSecret }}` solo se utiliza para secretos en el ámbito del repositorio
- [ ] Necesita usar la API de GitHub para acceder a secretos en el ámbito de la organización
