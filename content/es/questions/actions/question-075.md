---
question: "En un workflow que tiene múltiples jobs, todos ejecutándose en runners alojados por GitHub, ¿es cierto que todos los jobs están garantizados para ejecutarse en la misma máquina runner?"
title: "Pregunta 075"
---

> https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners
1. [x] No
1. [ ] Sí
> Cada job se ejecuta en una instancia nueva de una imagen del runner especificada por runs-on
1. [ ] Solo si se ejecutan en paralelo
> Cada job se ejecuta en una instancia nueva de una imagen del runner especificada por runs-on
1. [ ] Solo si usan la misma etiqueta `runs-on`
> Cada job se ejecuta en una instancia nueva de una imagen del runner especificada por runs-on
