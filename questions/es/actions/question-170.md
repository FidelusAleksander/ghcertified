---
question: "Observe los valores en la clave `runs-on` como se muestra en el siguiente trabajo del workflow. ¿Qué es cierto con respecto a cómo se ejecutará el trabajo?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow#using-custom-labels-to-route-jobs"
---
```yaml
jobs:
    fire_emblem_deploy:
        name: "Deploy the 'Fire Emblem' application"
        runs-on: [self-hosted,nes,linux]
```

- [x] El trabajo se ejecutará en un runner self-hosted que tenga todas las etiquetas aplicadas.
- [ ] El trabajo se ejecutará en un runner self-hosted que tenga cualquiera de las etiquetas aplicadas.
> Las etiquetas del runner se aplican de forma acumulativa; un workflow no se ejecutará en un runner que solo tenga algunas de las etiquetas. Todas son necesarias.
- [ ] El trabajo aún podrá ejecutarse en runners hosteados por GitHub, ya que pueden tener etiquetas personalizadas aplicadas a ellos.
> Los runners hosteados por GitHub no pueden tener etiquetas personalizadas aplicadas. Deben referenciarse con las [etiquetas predefinidas](https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job#standard-github-hosted-runners-for-public-repositories) que se les han asignado.
- [ ] El trabajo se ejecutará en un runner (self-hosted o hosteado por GitHub, el primero disponible) con el nombre `self-hosted,nes,linux`.
> `runs-on` apunta a etiquetas de runners, no a nombres.
