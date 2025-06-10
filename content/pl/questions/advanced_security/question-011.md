---
title: "Pytanie 011"
question: "Jak można zapobiec wypychaniu do GitHub commitów zawierających dane uwierzytelniające dostawców chmury?"
---


> https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations
1. [x] Włącz regułę ochrony przed wypychaniem (secret scanning push protection rule) dla swojego repozytorium lub organizacji.
1. [ ] Dodaj plik `.gitignore` do swojego repozytorium, aby ignorować pliki zawierające sekretne dane.
1. [ ] Utwórz GitHub Action, który będzie skanował Twoje commity w poszukiwaniu sekretów przed ich wypchnięciem do GitHub.
1. [ ] Włącz regułę ochrony gałęzi (branch protection rule) dla swojego repozytorium.
