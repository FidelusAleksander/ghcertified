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
> Incorrecto, solo `vars.MY_VAR` se evalúa dentro de `${{ }}`; esto genera texto como `some_value == 'MY_VALUE'`, y GitHub trata esa cadena no vacía como verdadera en lugar de realizar la comparación.  
> Consulta https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#literals
- [ ] No es posible porque las variables de configuración no pueden usarse en condiciones `if`
> Esto es cierto para `secrets`, pero no para las variables de configuración.
- [ ] No es posible porque las variables de configuración no pueden usarse en condiciones `if` a nivel de trabajo
> Esto es cierto para `secrets`, pero no para las variables de configuración.
