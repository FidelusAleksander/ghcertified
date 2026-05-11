---
question: "Você tem um segredo codificado em base-64 que você decodifica em um workflow do GitHub Actions. Como você pode garantir que o segredo decodificado não apareça acidentalmente no registro do workflow?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#masking-a-value-in-a-log"
---

- [x] Usando o comando `add-mask` no workflow em jobs onde o segredo decodificado pode ser utilizado.
> O uso do `add-mask` irá ocultar os valores que o GitHub Actions não detecta como segredo. Isso precisa ser feito uma vez por valor, por job que utiliza o segredo decodificado.
- [ ] Nada precisa ser feito, pois a infraestrutura do GitHub Actions automaticamente oculta segredos decodificados.
> Não é garantido que o GitHub Actions consiga automaticamente detectar e ocultar segredos transformados conforme a [documentação](https://docs.github.com/en/actions/reference/security/secure-use#use-secrets-for-sensitive-information).  
- [ ] Evitar o uso de instruções de impressão que contenham o segredo decodificado, já que essa é a única maneira do segredo decodificado aparecer no registro do workflow.
> Embora evitar instruções de impressão que contenham segredos decodificados seja recomendado, segredos decodificados podem aparecer em outros lugares no registro do workflow, como em mensagens relacionadas a chamadas de API.
- [ ] Usando a função integrada `maskSecret` para ocultar o segredo decodificado em casos onde ele pode ser utilizado.
> `maskSecret` não é uma função integrada fornecida pelo GitHub Actions.
