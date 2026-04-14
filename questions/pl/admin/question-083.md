---
question: "Jeśli lista dozwolonych adresów IP dla Enterprise jest aktywna, co się stanie, gdy spróbujesz opublikować swoją stronę GitHub Pages z gałęzi zamiast używać niestandardowego workflow GitHub Actions?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/admin/configuration/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list#using-github-pages-with-an-ip-allow-list"
---

- [x] Runner buildu będzie miał domyślny dostęp do repozytorium dla strony GitHub Pages
- [ ] Runner buildu zostanie zablokowany przed dostępem do repozytorium, dopóki nie zostanie ręcznie dodany do listy dozwolonych
- [ ] GitHub Pages nie mogą być budowane lub aktualizowane, dopóki lista dozwolonych adresów IP nie zostanie wyłączona
- [ ] Musisz ręcznie uruchamiać buildy dla stron GitHub Pages
