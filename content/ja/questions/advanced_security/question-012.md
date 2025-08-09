---
title: "質問 012"
question: "GitHub Secret scanningパートナープログラムについて正しいものはどれですか？（3つ選択）"
---


> https://docs.github.com/en/code-security/secret-scanning/secret-scanning-partner-program
- [x] サービスプロバイダーは発行するシークレットの正規表現パターンをGitHubに提供し、GitHub Secret scanningがそれらを認識できるようにするプログラム
- [x] GitHubがパートナーサービスのシークレットを検知すると、サービスプロバイダーに漏洩シークレットを通知する
- [x] パートナーはGitHubから漏洩通知を受けると、シークレットの無効化や所有者への通知などの対応を行う
- [ ] パートナーがGitHubのSecret scanning APIにアクセスして、自社のフォーマットに合致するシークレットをGitHubリポジトリ内でスキャンできるようにする
> GitHubがSecret scanningを実行し、パートナーは実行しない
- [ ] GitHubが漏洩シークレットを自動無効化し、サービスプロバイダーに通知する
> GitHubはシークレットの無効化には関与せず、サービスプロバイダーが対応可能