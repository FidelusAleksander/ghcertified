---
question: "Manuela konfiguruje własne hostowane biegacze (self-hosted runners) dla swojej organizacji, która ma silnie ograniczoną komunikację z adresami IP. Jak może zapewnić, że własne hostowane biegacze będą mogły komunikować się z GitHub?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list"
---

- [x] Dodanie adresów IP własnych hostowanych biegaczy do listy dozwolonych adresów IP organizacji
> Własne hostowane biegacze komunikują się z GitHub w celu wykonywania różnych działań, co zostało opisane w [dokumentacji](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/runners/self-hosted-runners#communication). Aby umożliwić tę komunikację, należy dodać adresy IP własnych hostowanych biegaczy do listy dozwolonych adresów IP.
- [ ] Dodanie systemu operacyjnego własnych hostowanych biegaczy do listy dozwolonych systemów operacyjnych organizacji
- [ ] Dodanie pliku `.ip-exception` do katalogu głównego struktury katalogowej własnego hostowanego biegacza
- [ ] Przełączenie się na standardowe biegacze hostowane przez GitHub, ponieważ własne hostowane biegacze będą zablokowane, jeśli listy dozwolonych adresów IP są włączone
- [ ] Zaznaczenie pola wyboru "Zezwalaj na dostęp z własnych hostowanych biegaczy" w ustawieniach listy dozwolonych adresów IP organizacji
