---
question: "Marianne tiene una rama de características que contiene su nuevo archivo de flujo de trabajo, configurado para activarse todos los días a las 2 AM, utilizando la sintaxis que se muestra a continuación. Sin embargo, al día siguiente, el flujo de trabajo no se activa. ¿Cuál podría ser la razón?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule"
---

```yaml
on:
    schedule:
        cron:
            "0 2 * * *"
```

- [x] El archivo del flujo de trabajo debe estar en la rama predeterminada para que se active mediante el evento `schedule`.
- [ ] La sintaxis de `cron` no está programada correctamente.
> `"0 2 * * *"` en la sintaxis CRON significa "ejecutarse todos los días a las 2 AM". Incluso si la programación estuviera configurada incorrectamente, el flujo de trabajo aun así no se activaría ya que no está presente en la rama predeterminada.
- [ ] `schedule` no puede ser el único evento en el flujo de trabajo. Debe estar emparejado con un evento basado en el repositorio, como `push`.
- [ ] No se utilizó la sintaxis `@daily`.
> La sintaxis no estándar CRON como `@daily` no es compatible con GitHub Actions.
- [ ] El repositorio privado que contiene el flujo de trabajo no ha tenido actividad en más de 60 días, deshabilitando automáticamente el flujo de trabajo.
> Esta actividad de deshabilitación automática solo ocurre en repositorios públicos, no en repositorios privados.
