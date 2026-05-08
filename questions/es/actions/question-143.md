---
question: "Su organización quiere reducir el período de retención para los artefactos almacenados, citando preocupaciones de almacenamiento. ¿Cómo se puede hacer esto a nivel organizacional?"
documentation: "https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization"
---

- [x] Navegando a la configuración de Actions de la organización y editando el valor de la configuración "Artifact and log retention"  
- [ ] Usando runners autohospedados, creando un archivo `.github/retention-policy.yml` y especificando el valor de la clave `artifact-retention-period`  
> Personalizar los períodos de retención de artefactos no se limita a los runners autohospedados.  
- [ ] Esto no se puede hacer a nivel organizacional. Todos los workflows que utilicen `actions/upload-artifact` deben usar el valor requerido de entrada `retention-days`.  
> Aunque la entrada `retention-days` puede ser utilizada para personalizar el período de retención de artefactos individuales creados por un workflow, no es apropiada si se busca aplicar una política general a nivel organizacional. Además, la entrada `retention-days` es [opcional, no requerida](https://github.com/actions/upload-artifact#inputs).  
- [ ] Esto no se puede hacer: los artefactos se almacenan estrictamente por 90 días en todos los sistemas que implementan GitHub Actions.  
> El período de retención predeterminado para artefactos es de 90 días. Es posible cambiar este valor en todos los sistemas que implementan GitHub Actions.  
