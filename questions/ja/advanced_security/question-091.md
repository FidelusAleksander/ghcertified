---
question: "GitHub Enterprise ServerでGitHub Advanced Security機能を有効化する方法は？"
documentation: "https://docs.github.com/en/enterprise-server@3.3/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise"
---

- [x] サイト管理コンソールのセキュリティタブで
- [x] SSHを使用してGitHub Enterprise Serverインスタンスに直接接続し、管理シェル`ghe-config`コマンドを使用して
- [ ] GitHubサポートにアップグレードを依頼して
- [ ] GitHub Enterprise Serverインスタンスの`/etc/github`ディレクトリ内の`config.yml`ファイルで、`github.advanced_security.enabled`構成オプションを`true`に設定して
- [ ] `.github`リポジトリ内の`config.yml`ファイルで、`github.advanced_security.enabled`構成オプションを`true`に設定して
