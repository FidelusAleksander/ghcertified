---
question: "Manuela está configurando runners autohospedados para su organización, la cual tiene una comunicación ampliamente restringida con direcciones IP. ¿Cómo puede asegurarse de que los runners autohospedados puedan comunicarse con GitHub?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list"
---

- [x] Agregar la(s) dirección(es) IP de los runners autohospedados a la lista de direcciones IP permitidas de la organización  
> Los runners autohospedados se comunican con GitHub para realizar varias actividades, como se menciona en la [documentación](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/runners/self-hosted-runners#communication). Para permitir esta comunicación, se deben agregar la(s) dirección(es) IP de los runners autohospedados a la lista de direcciones IP permitidas  
- [ ] Agregar el sistema operativo de los runners autohospedados a la lista de sistemas operativos permitidos de la organización  
- [ ] Agregar el archivo `.ip-exception` en el nivel superior de la estructura de directorios del runner autohospedado  
- [ ] Cambiar a runners estándar hospedados en GitHub, ya que los runners autohospedados serán bloqueados si se habilitan listas de IP permitidas  
- [ ] Seleccionar la casilla de verificación "Permitir acceso desde runners autohospedados" en la configuración de la lista de IP permitidas de la organización  
