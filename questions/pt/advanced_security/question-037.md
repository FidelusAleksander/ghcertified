---
question: "O que a configuração padrão de análise do CodeQL no GitHub faz?"
documentation: "https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-with-codeql#about-code-scanning-with-codeql"
---

- [x] Detecta automaticamente linguagens, seleciona o conjunto de consultas padrão e configura os gatilhos de varredura
- [ ] Exige que os usuários selecionem linguagens e definam um conjunto de consultas personalizado antes que as varreduras possam ser executadas
> É exibida uma caixa de diálogo de confirmação ao habilitar a configuração padrão, mas as linguagens e o conjunto de consultas são automaticamente pré-selecionados
- [ ] Analisa apenas a linguagem principal do repositório usando o conjunto de consultas estendido
> A configuração padrão analisa todas as linguagens suportadas, não apenas a principal, e usa o conjunto de consultas padrão
- [ ] Cria um arquivo de workflow CodeQL no repositório que deve ser mesclado antes que a varredura comece
> Isso descreve a configuração avançada, não a configuração padrão
