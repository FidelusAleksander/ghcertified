---
question: "Ingrid's organización tiene un subconjunto de runners auto-hospedados en Linux que solo deberían ser utilizados por ciertos repositorios. ¿Cuál es el mejor enfoque para que ella garantice este comportamiento?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access#changing-which-repositories-can-access-a-runner-group"
---

- [x] Crear un nuevo grupo de runners, agregar los runners al grupo y luego seleccionar qué repositorios tienen acceso al grupo en la configuración del grupo.
- [ ] Crear una nueva etiqueta de runner, agregar las etiquetas a los runners y luego seleccionar qué repositorios tienen acceso a la etiqueta en la configuración de la etiqueta.
- [ ] Crear una nueva etiqueta de runner, agregar las etiquetas a los runners y luego asegurarse de que todos los flujos de trabajo en los repositorios tengan esa etiqueta incluida en su campo `runs-on`.
> Las etiquetas no limitan el acceso a los runners. Simplemente agregar una etiqueta no funcionará; agregar etiquetas a `runs-on` podría potencialmente afectar que el flujo de trabajo correspondiente encuentre un runner en el cual ejecutarse.
- [ ] Crear un nuevo grupo de runners, seleccionar "Linux" como el sistema operativo y usar patrones glob para definir qué repositorios tienen acceso en la configuración del grupo.  
