---
question: "En un flujo de trabajo que tiene múltiples trabajos, todos ejecutándose en runners alojados en GitHub, ¿es cierto que todos los trabajos están garantizados para ejecutarse en la misma máquina del runner?"
documentation: "https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners"
---

- [x] No
- [ ] Sí
> Cada trabajo se ejecuta en una instancia nueva de una imagen del runner especificada por runs-on
- [ ] Solo si se ejecutan en paralelo
> Cada trabajo se ejecuta en una instancia nueva de una imagen del runner especificada por runs-on
- [ ] Solo si utilizan la misma etiqueta `runs-on`
> Cada trabajo se ejecuta en una instancia nueva de una imagen del runner especificada por runs-on
