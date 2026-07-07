---
question: "O que a configuração padrão de análise CodeQL no GitHub faz?"
documentation: "https://docs.github.com/en/code-security/concepts/code-scanning/codeql"
---

- [x] Detecta automaticamente as linguagens, seleciona o conjunto de consultas padrão e configura os gatilhos de varredura
- [ ] Requer que os usuários selecionem linguagens e definam um conjunto de consultas personalizado antes que as varreduras possam ser executadas
> Um diálogo de confirmação é exibido ao habilitar a configuração padrão, mas as linguagens e o conjunto de consultas são automaticamente pré-selecionados
- [ ] Analisa apenas a linguagem primária do repositório usando o conjunto de consultas estendido
> A configuração padrão verifica todas as linguagens suportadas, não apenas a primária, e usa o conjunto de consultas padrão
- [ ] Cria um arquivo de workflow CodeQL no repositório que deve ser mesclado antes que a varredura comece
> Isso descreve a configuração avançada, não a configuração padrão
