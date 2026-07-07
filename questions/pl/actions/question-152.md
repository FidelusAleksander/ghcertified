---
question: "Uzupełnij lukę: Podczas korzystania z samodzielnie hostowanych runnerów, pamięć podręczna narzędzi ___"
documentation: "https://docs.github.com/en/enterprise-server@3.21/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access"
---

- [x] zaczyna się jako pusta i musi zostać wypełniona, aby przechowywać narzędzia między uruchomieniami
> Pamięci podręczne narzędzi pozwalają buforować różne wersje narzędzi, co umożliwia szybsze działanie samodzielnie hostowanych runnerów. Bez pamięci podręcznych narzędzi samodzielnie hostowane runnery wykorzystujące `actions/setup-*` będą wykonywać zadania wolniej.
- [ ] zaczyna się tak samo jak w przypadku runnerów hostowanych przez GitHub, tj. jest wstępnie wypełniona określonymi narzędziami
> Podczas gdy runnery hostowane przez GitHub rzeczywiście są wyposażone w pewne wstępnie zainstalowane narzędzia, nie dotyczy to samodzielnie hostowanych runnerów.
- [ ] zaczyna się z tymi samymi narzędziami, co runnery hostowane przez GitHub, a także wybranym zestawem niestandardowych narzędzi w celu ulepszenia zarządzania samodzielnie hostowanymi runnerami
- [ ] nie może być wypełniona

