---
title: "Pytanie 022"
question: "Twoja firma posiada wewnętrzne sekrety, które nie powinny być wysyłane do repozytoriów GitHub. Wzorzec tych sekretów nie jest rozpoznawany przez GitHub i dlatego nie jest wykrywany przez skanowanie sekretów. Co firmy mogą zrobić, aby chronić swoich programistów przed przypadkowym wysłaniem tych sekretów do repozytoriów w ich organizacji GitHub?"
---


> https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization
1. [x] Zdefiniuj wyrażenia regex dla tych sekretów i włącz niestandardowe wzorce dla skanowania sekretów w organizacji.
1. [ ] Firma powinna przystąpić do programu partnerskiego GitHub, aby wzorzec sekretów firmy był rozpoznawany.
> Program partnerski GitHub jest przeznaczony dla dostawców usług, które dystrybuują sekrety poza swoją organizację (np. dostawcy chmury). Nie jest przeznaczony dla wewnętrznych sekretów pojedynczej organizacji.
1. [ ] Zdefiniuj niestandardowe przepływy pracy GitHub Actions dla repozytoriów w organizacji, które będą skanować te sekrety.
1. [ ] W wszystkich repozytoriach umieść plik `secret_scanning.yml`, który zdefiniuje te niestandardowe sekrety, które powinny być skanowane.
> Plik `secret_scanning.yml` może być używany do wyłączania skanowania sekretów dla konkretnych plików lub katalogów. 
