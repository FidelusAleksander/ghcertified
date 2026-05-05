---
question: "De quais maneiras você pode habilitar o registro de diagnóstico do runner?"
documentation: "https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging#enabling-runner-diagnostic-logging"
---

- [x] Definindo um segredo ou variável chamada `ACTIONS_RUNNER_DEBUG` como `true`
> Nota: `ACTIONS_RUNNER_DEBUG` pode ser definida como um segredo ou variável no nível da organização ou do repositório.
- [x] Reexecutando um workflow com `Enable debug logging enabled`
- [ ] Adicionando uma pasta de nível superior chamada `ACTIONS_RUNNER_DEBUG` ao repositório do workflow
- [ ] Adicionando uma subpasta `runner-diagnostic-logs` ao diretório `_diag` do runner hospedado localmente que está sendo usado
> `runner-diagnostic-logs` é o nome da pasta que o GitHub gera quando `ACTIONS_RUNNER_DEBUG` está habilitado. Para evitar confusão, uma pasta com esse nome não deve ser criada em nenhum outro lugar.
- [ ] Renomeando o diretório `_diag` de um runner hospedado localmente para `runner-diagnostic-logs`
> Renomear o diretório `_diag` nunca deve ser feito, pois isso pode afetar potencialmente as atividades de registro.
