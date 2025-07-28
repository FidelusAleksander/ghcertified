---
question: "En un flujo de trabajo que tiene múltiples jobs, todos ejecutándose en runners alojados por GitHub, ¿es cierto que todos los jobs están garantizados para ejecutarse en la misma máquina del runner?"
title: "Pregunta 075"
---

> https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners
1. [x] No
1. [ ] Sí
> Cada job se ejecuta en una instancia nueva de una imagen del runner especificada por runs-on
