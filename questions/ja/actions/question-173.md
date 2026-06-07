---
question: "ある組織には、プライベートネットワーク上にホストされる特殊なNode.js環境を共有する複数のリポジトリがあります。この組織の次の目標は、そのネットワーク内にノードロックソフトウェアを設定することです。ワークフローを実行する際、組織の要件に最も適した方法は次のうちどれでしょうか？"
documentation: "https://docs.github.com/en/actions/concepts/runners/self-hosted-runners"
---

- [x] 組織レベルで設定されたSelf-hosted runners
- [ ] リポジトリごとに1つのSelf-hosted runnerをリポジトリレベルで設定
> これは重複しており、管理が複雑になります。リポジトリは同じ組織レベルのランナーを参照できるため、この状況においてはこれが正しいアプローチです。
- [ ] GitHub-hosted runnerを使用し、すべてのワークフローが`actions/setup-node`を利用
> GitHub-hosted runnerは[エフェメラル](https://docs.github.com/en/actions/concepts/runners/github-hosted-runners#overview-of-github-hosted-runners)であり、ワークフロー実行ごとに新しいランナーインスタンスがセットアップされます。このため、指定されたデバイス/VMでのみソフトウェアを実行できるノードロックソフトウェアには適していません。また、GitHub-hosted runnerをプライベートネットワークにアクセスするように設定することは可能ですが、これは標準機能ではありません。
- [ ] 組織レベルで設定されたGitHub-hosted runners
> GitHub-hosted runnersはこのような方法で設定することはできません。
- [ ] GitHub-hosted runnersを使用し、すべてのワークフローで`runs-on: [node<version>]`（`<version>`は希望するNodeバージョン）を使用
> `[node<version>]`は、GitHub-hosted runnerを指しません。
