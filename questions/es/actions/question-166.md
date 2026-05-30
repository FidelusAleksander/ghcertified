---
question: "Las acciones de JavaScript y `actions/github-script` utilizan JavaScript. ¿Por qué deberías usar `actions/github-script` en lugar de crear tu propia acción de JavaScript?"
documentation: "https://github.com/actions/github-script"
---

- [x] `actions/github-script` debe usarse para scripts breves e integrados
- [x] `actions/github-script` debe usarse cuando quieras utilizar un cliente preautenticado para interactuar con la API de GitHub.
- [x] Las acciones de JavaScript deben usarse cuando quieres una acción personalizada y reutilizable que pueda ser utilizada en múltiples repositorios 
- [ ] Las acciones de JavaScript deben usarse para scripts breves e integrados
- [ ] `actions/github-script` debe usarse cuando necesitas un entorno Node.js ajustado con varias dependencias específicas.
> Aunque puedes instalar módulos para que los use `actions/github-script` antes de llamarlo, si se necesitan varias dependencias, esto resulta en varios pasos en el flujo de trabajo. Además, `actions/github-script` no permite cambiar la versión de Node.js; estás limitado a la que define.
- [ ] Las acciones de JavaScript deben usarse cuando quieres una solución de bajo costo para hacer llamadas a la API de GitHub.
> Las acciones de JavaScript no son de bajo costo; requieren crear un archivo `action.yml`, el cual debe estar almacenado en su propia carpeta o incluso en su propio repositorio, dependiendo del enfoque. `actions/github-script` viene con un cliente preautenticado que facilita realizar llamadas a la API de GitHub utilizando un enfoque basado en JavaScript.
