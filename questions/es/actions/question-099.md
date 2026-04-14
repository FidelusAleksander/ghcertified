---
question: "¿Cuál es el enfoque recomendado para almacenar secretos mayores de 48 KB?"
documentation: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#limits-for-secrets"
---

- [ ] evitar almacenar secretos grandes por completo para garantizar la seguridad
- [ ] los secretos mayores de 48 KB no pueden almacenarse
- [x] encriptar y almacenar secretos en el repository pero mantener la frase de descifrado como un secret
- [ ] almacenar secretos grandes directamente como repository secrets para evitar limitaciones
