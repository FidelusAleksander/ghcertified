---
question: "Has bifurcado un repositorio para mejorar un workflow que utiliza un secreto para acceder a una aplicación de terceros. Activas el workflow antes de editar su código para obtener un resultado base, pero descubres que el workflow falla. ¿Por qué podría ocurrir esto?"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets?tool=webui#using-secrets-in-a-workflow"
---

- [x] Los repositorios bifurcados no heredan secretos del repositorio original  
> Como medida de seguridad, (excepto para `GITHUB_TOKEN`) los secretos no se pasan al runner cuando un workflow se activa desde un repositorio bifurcado. Esto resultará en que el workflow falle si hace referencia a un secreto del repositorio original.
- [ ] Al heredar el secreto del repositorio original, ocurrió un error durante la bifurcación que resultó en un secreto malformado o inválido
> Excepto para `GITHUB_TOKEN`, los secretos no se pasan al runner cuando un workflow se activa desde un repositorio bifurcado. Por lo tanto, no podría ocurrir tal malformación.
- [ ] El secreto heredado tenía un tamaño mayor a 48 KB
> Excepto para `GITHUB_TOKEN`, los secretos no se pasan al runner cuando un workflow se activa desde un repositorio bifurcado. Por lo tanto, el tamaño no es un factor a considerar.
- [ ] Los repositorios bifurcados solo heredan secretos del repositorio, por lo que el secreto usado en el workflow debe haber sido un secreto organizacional o de entorno.
> Excepto para `GITHUB_TOKEN`, los secretos no se pasan al runner cuando un workflow se activa desde un repositorio bifurcado. Esto se aplica a todos los tipos de secretos (repositorio, entorno y organizacional).
