---
title: "質問 013"
question: "Secret scanningから特定のディレクトリやファイルを除外するにはどうすればよいですか？"
---


> https://docs.github.com/en/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories#excluding-directories-from-secret-scanning-alerts-for-users
1. [x] `secret_scanning.yml`ファイルを作成し、スキャン対象から除外したいパスを記述する
1. [ ] 特定のファイルやディレクトリをスキャンから除外することはできません。Secret scanningを有効にすると全ファイル・ディレクトリがスキャン対象になります。
1. [ ] `.gitignore`ファイルに除外したいファイルを記述する
1. [ ] `dependabot.yml`ファイルを作成し、スキャン対象から除外したいパスを記述する