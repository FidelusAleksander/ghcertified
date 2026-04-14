---
question: "¿Cuál es la forma correcta de activar un trabajo solo si la variable de configuración `MY_VAR` tiene el valor de `MY_VALUE`?"
documentation: "https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context"
---

- [x] Creando la siguiente condición a nivel de trabajo
```yaml
my-job:
  if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
- [ ] Creando la siguiente condición a nivel de trabajo
```yaml
my-job:
  if: ${{ vars.MY_VAR }} == 'MY_VALUE'
```
> Esto siempre se evaluará como True
- [ ] No es posible porque las variables de configuración no pueden ser utilizadas en condiciones `if`
> Esto es cierto para `secrets` pero no para las variables de configuración
- [ ] No es posible porque las variables de configuración no pueden ser utilizadas en condiciones `if` a nivel de trabajo
> Esto es cierto para `secrets` pero no para las variables de configuración
