---
question: "Judith tiene un workflow que debería activarse cada vez que se realiza un commit en el repositorio. El repositorio no siempre está tan activo, por lo que Judith desea que el workflow se ejecute programáticamente una vez por semana como medida de seguridad. ¿Qué combinación de eventos debería usar para garantizar este comportamiento?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"
---

- [x] `push` y `schedule`
- [ ] `pull_request` (con `types:[closed]`) y `schedule`
> Los pull requests pueden cerrarse sin ser fusionados, y se pueden hacer commits en un repositorio sin un pull request.
- [ ] `push` y `workflow_dispatch`
> La palabra "programáticamente" en la pregunta significa que el workflow debería activarse de manera no manual. Hacer que los usuarios tengan que activar manualmente un workflow cada semana no es confiable; puede y debe automatizarse usando `schedule`.
- [ ] `push` y `weekly`
> `weekly` no es un evento válido. Usa `schedule` con la sintaxis `cron` para configurar el workflow para que se ejecute semanalmente.
- [ ] Esto no es posible: `schedule` no puede combinarse con otros eventos.
