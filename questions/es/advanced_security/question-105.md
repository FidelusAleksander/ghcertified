---
question: "¿Cuál de estos es un archivo de configuración válido de `dependabot.yml`?"
documentation: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file"
---

- [x] 
```yaml 
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
```
- [ ] 
```yaml 
version: 2
config:
  - directory: "/"
    schedule:
      interval: "daily"
```
- [ ] 
```yaml 
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "everyday"
```
- [ ] 
```yaml 
version: 2
config:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
```
