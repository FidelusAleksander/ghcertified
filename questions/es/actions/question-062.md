---
question: "Tu organización define un secreto `SomeSecret`, sin embargo, cuando haces referencia a ese secreto en un workflow usando `${{ secrets.SomeSecret }}` proporciona un valor diferente al esperado. ¿Cuál podría ser la razón de esto?"
title: "Pregunta 062"
---

> https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets
1. [x] El secreto `SomeSecret` también está declarado en el ámbito del repository
1. [ ] El secreto `SomeSecret` también está declarado en el ámbito del enterprise
> Si un secreto con el mismo nombre existe en múltiples niveles, el secreto en el nivel más bajo tiene prioridad.
1. [ ] La expresión `${{ secrets.SomeSecret }}` solo se usa para secretos con ámbito de repository
1. [ ] Necesitas usar la GitHub API para acceder a secretos con ámbito de organization
