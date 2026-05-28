---
question: "Mercedes quer publicar uma action de contêiner Docker criada por ela no GitHub Actions Marketplace. Quais arquivos ela precisa ter, no mínimo, para fazer isso?"
documentation: "https://docs.github.com/en/actions/how-tos/create-and-publish-actions/publish-in-github-marketplace"
---

- [x] `action.yml`
> Um arquivo `action.yml` é necessário para que uma action seja publicada no Marketplace, independentemente do tipo.
- [x] Um `Dockerfile`, se a imagem for construída como parte da action durante a execução do workflow
> Actions de contêiner Docker requerem um `Dockerfile` apenas se a imagem precisar ser criada do zero e não puder ser puxada de um registro de imagens. O valor de `runs.image` no `action.yml` deve ser o caminho para o `Dockerfile`.
- [ ] Um `Dockerfile`, se a imagem for referenciada a partir de um registro de imagens
> Quando uma imagem é referenciada em um registro de imagens, não é necessário um `Dockerfile`. O valor da chave `runs.image` no `action.yml` deve ser prefixado com `docker://` seguido pelo nome da imagem. Consulte as seções "runs" e "runs.image" na [documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax#runsimage) para mais informações.
- [ ] `README.md`
> Embora o arquivo `README.md` seja recomendado pelo GitHub para Actions publicadas no Marketplace, ele não é um requisito obrigatório.
- [ ] `.dockerignore`
- [ ] `CONTRIBUTING.md`
