---
question: "Która z poniższych odpowiedzi jest poprawna w odniesieniu do tokenów dostępu instalacyjnego?"
documentation: "https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation#using-an-installation-access-token-to-authenticate-as-an-app-installation"
---

- [x] Tokeny dostępu instalacyjnego to krótkoterminowe tokeny idealne do działań automatyzacyjnych, ale wymagają skonfigurowania aplikacji GitHub.
- [x] `GITHUB_TOKEN` jest rodzajem tokenu dostępu instalacyjnego.
> `GITHUB_TOKEN` to token dostępu instalacyjnego aplikacji GitHub, który jest automatycznie generowany dla każdego uruchomienia workflow. Zobacz [dokumentację](https://docs.github.com/en/actions/concepts/security/github_token) w celu uzyskania dodatkowych informacji.
- [x] Akcja `actions/create-github-app-token` może być wywoływana w ramach workflow w celu utworzenia tokenu dostępu instalacyjnego dostępnego do natychmiastowego użycia.
- [ ] Akcja `actions/create-github-app-token` może być wywoływana w ramach workflow w celu utworzenia tokenu dostępu instalacyjnego, ale token dostępu instalacyjnego może być używany tylko w przyszłych uruchomieniach workflow.
> Po utworzeniu token dostępu instalacyjnego może być używany natychmiast. Szczegóły znajdziesz na [oficjalnej stronie tej akcji](https://github.com/actions/create-github-app-token).
- [ ] Tokeny dostępu instalacyjnego nie mogą być skonfigurowane do działania w imieniu powiązanej z nimi aplikacji GitHub.
> Tokeny dostępu instalacyjnego są często konfigurowane do działania w imieniu powiązanej z nimi aplikacji GitHub. Może to pomóc w audytowaniu aktywności automatycznej.
