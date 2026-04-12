---
question: "Para ejecutar un `step` solo si el secreto `MY_SECRET` ha sido configurado, puedes:"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-secrets"
---

- [x] Configurar el secreto `MY_SECRET` como una variable de entorno a nivel de trabajo, luego referenciar esa variable de entorno para ejecutar condicionalmente ese paso
```yaml
my-job:
  runs-on: ubuntu-latest
  env:
    my_secret: ${{ secrets.MY_SECRET }}
  steps:
    - if: ${{ env.my_secret != '' }}
```
- [ ] Creando la siguiente condicional a nivel de trabajo
```yaml
my-job:
  runs-on: ubuntu-latest
  if: ${{ secrets.MY_SECRET == '' }}
```
> los secretos no pueden referenciarse directamente en las condicionales if:
- [ ] Creando la siguiente condicional a nivel de paso
```yaml
my-job:
  runs-on: ubuntu-latest
  steps:
    - if: ${{ secrets.MY_SECRET == '' }}
```
> los secretos no pueden referenciarse directamente en las condicionales if:
- [ ] Creando la siguiente condicional a nivel de paso
```yaml
my-job:
  runs-on: ubuntu-latest
  steps:
    - if: ${{ secrets.MY_SECRET }}
```
> los secretos no pueden referenciarse directamente en las condicionales if:
