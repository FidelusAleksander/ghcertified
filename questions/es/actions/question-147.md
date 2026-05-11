---
question: "Tienes un secreto codificado en base-64 que descodificas en un flujo de trabajo de GitHub Actions. ¿Cómo puedes asegurarte de que el secreto descodificado no aparezca accidentalmente en el registro del flujo de trabajo?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#masking-a-value-in-a-log"
---

- [x] Usando el comando de flujo de trabajo `add-mask` en los trabajos donde se pueda utilizar el secreto descodificado.
> Usar `add-mask` ocultará valores que GitHub Actions no detecta automáticamente como secretos. Esto debe hacerse una vez por cada valor, por cada trabajo que utilice el secreto descodificado.
- [ ] No se necesita hacer nada, ya que la infraestructura de GitHub Actions redacta automáticamente los secretos descodificados.
> No se garantiza que GitHub Actions pueda detectar y redactar automáticamente secretos transformados según la [documentación](https://docs.github.com/en/actions/reference/security/secure-use#use-secrets-for-sensitive-information).  
- [ ] Evitar el uso de declaraciones de impresión que contengan el secreto descodificado, ya que esta es la única forma en que el secreto descodificado podría aparecer en el registro del flujo de trabajo.
> Aunque se recomienda evitar declaraciones de impresión que contengan secretos descodificados, los secretos descodificados pueden aparecer en otras partes del registro del flujo de trabajo, como en mensajes relacionados con llamadas a la API.
- [ ] Usar la función integrada `maskSecret` para redactar el secreto descodificado en los casos en que pueda ser utilizado.
> `maskSecret` no es una función integrada proporcionada por GitHub Actions.
