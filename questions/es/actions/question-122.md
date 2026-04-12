---
question: "¿Cuáles son los ámbitos definidos para las variables personalizadas en un workflow?"
documentation: "https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow"
---

- [x] Todo el workflow, utilizando `env` en el nivel superior del archivo de workflow
- [x] El contenido de un job dentro de un workflow, utilizando `jobs.<job_id>.env`
- [x] Un paso específico dentro de un job, utilizando `jobs.<job_id>.steps[*].env`
- [ ] Todos los jobs dentro de un workflow, utilizando `jobs.env`
- [ ] Todo el workflow, utilizando `custom.env` en el nivel superior del archivo de workflow
- [ ] Un entorno específico en el repository, utilizando `environment.<environment_id>.env` en el nivel superior del archivo de workflow
