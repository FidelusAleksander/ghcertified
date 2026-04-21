---
question: "¿Cómo puedes usar la API de GitHub para crear o actualizar un secreto del repositorio?"
documentation: "https://docs.github.com/en/rest/actions/secrets?create-or-update-a-repository-secret=&apiVersion=2022-11-28#create-or-update-a-repository-secret"
---

- [x] `PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}`
- [ ] `POST /repos/{owner}/{repo}/actions/secrets/{secret_name}`
> `POST` no es válido para este endpoint. Solo `PUT` puede crear o actualizar secretos del repositorio.
- [ ] `HEAD /repos/{owner}/{repo}/actions/secrets/{secret_name}`
- [ ] `GET /repos/{owner}/{repo}/actions/secrets/{secret_name}`
