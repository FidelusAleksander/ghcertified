---
question: "Mercedes quiere publicar una acción de contenedor de Docker que ha creado en el GitHub Actions Marketplace. ¿Qué archivos necesita como mínimo para hacerlo?"
documentation: "https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace"
---

- [x] `action.yml`
> Un archivo `action.yml` es obligatorio para que una acción sea publicada en el Marketplace, independientemente del tipo.
- [x] Un `Dockerfile`, si la imagen se construye como parte de la acción durante la ejecución del workflow
> Las acciones de contenedor de Docker solo requieren un `Dockerfile` si la imagen debe crearse desde cero y no puede ser extraída de un registro de imágenes. El valor de `runs.image` en `action.yml` debe ser la ruta al `Dockerfile`.
- [ ] Un `Dockerfile`, si la imagen será referenciada desde un registro de imágenes
> Al referenciar una imagen en un registro de imágenes, no se necesita un `Dockerfile`. El valor de la clave `runs.image` en `action.yml` debe estar prefijado con `docker://` seguido del nombre de la imagen. Consulta las secciones "runs" y "runs.image" en la [documentación](https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax#runsimage) para más información.
- [ ] `README.md`
> Aunque GitHub recomienda un archivo `README.md` para las acciones que se publican en el Marketplace, no es un requisito estricto.
- [ ] `.dockerignore`
- [ ] `CONTRIBUTING.md`
