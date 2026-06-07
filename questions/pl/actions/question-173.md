---
question: "Organizacja posiada kilka repozytoriów, które korzystają ze specjalistycznego środowiska Node.js hostowanego w prywatnej sieci. Kolejnym celem organizacji jest konfiguracja oprogramowania blokującego węzły w tej sieci. Która z poniższych opcji najlepiej odpowiada potrzebom organizacji w zakresie uruchamiania workflows?"
documentation: "https://docs.github.com/en/actions/concepts/runners/self-hosted-runners"
---

- [x] Samodzielnie hostowane runners skonfigurowane na poziomie organizacji
- [ ] Jeden samodzielnie hostowany runner na każde repozytorium, skonfigurowany na poziomie repozytorium
> To byłoby zduplikowane i trudne do zarządzania. Repozytoria mogą odwoływać się do tego samego runnera na poziomie organizacji, co jest właściwym podejściem w tej sytuacji.
- [ ] Runnery hostowane przez GitHub, z wszystkimi workflowami korzystającymi z `actions/setup-node`
> Runnery hostowane przez GitHub są [efemeryczne](https://docs.github.com/en/actions/concepts/runners/github-hosted-runners#overview-of-github-hosted-runners), co oznacza, że dla każdego uruchamiania workflow tworzona jest nowa instancja runnera. To nie byłoby odpowiednie w przypadku oprogramowania blokującego węzły, które pozwala na uruchamianie oprogramowania tylko na określonym urządzeniu/VM. Dodatkowo, chociaż runnery hostowane przez GitHub mogą być skonfigurowane do dostępu do prywatnych sieci, nie jest to funkcjonalność natywna.
- [ ] Runnery hostowane przez GitHub skonfigurowane na poziomie organizacji
> Runnery hostowane przez GitHub nie mogą być w ten sposób skonfigurowane.
- [ ] Runnery hostowane przez GitHub, korzystające z `runs-on: [node<version>]` (`<version>` to żądana wersja Node) we wszystkich workflowach.
> `[node<version>]` nie wskazuje na żaden runner hostowany przez GitHub.
