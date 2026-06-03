---
question: "A organização de Ingrid possui um subconjunto de runners Linux auto-hospedados que devem ser usados apenas por determinados repositórios. Qual é a melhor abordagem para ela impor esse comportamento?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access#changing-which-repositories-can-access-a-runner-group"
---

- [x] Criar um novo grupo de runners, adicionar os runners ao grupo e então selecionar quais repositórios terão acesso ao grupo nas configurações do grupo.
- [ ] Criar um novo rótulo de runner, adicionar os rótulos aos runners e então selecionar quais repositórios terão acesso ao rótulo nas configurações do rótulo.
- [ ] Criar um novo rótulo de runner, adicionar os rótulos aos runners e garantir que todos os workflows nos repositórios tenham esse rótulo incluído no campo `runs-on`.
> Rótulos não limitam o acesso a runners. Apenas adicionar um rótulo não funcionará; adicionar rótulos ao `runs-on` pode potencialmente afetar o workflow correspondente ao tentar encontrar um runner para executar.
- [ ] Criar um novo grupo de runners, selecionar "Linux" como o sistema operacional e usar padrões glob para definir quais repositórios terão acesso nas configurações do grupo.
