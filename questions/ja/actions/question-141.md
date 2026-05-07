---
question: "なぜ`actions/cache`を利用する際に`hashFiles`を使用するのですか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#hashfiles"
---
```yaml
  - uses: actions/cache@v5
    with:
      path: ~/.npm
      key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
```
- [x] キャッシュキーが`hashFiles`でラップされた依存関係ファイルを含む場合、依存関係ファイルが更新されるとキーも変更され、それによってキャッシュを最新の状態に保つのに役立ちます。
> `hashFiles`は指定されたパスのハッシュを作成するGitHubの組み込み関数です。これを使用してキャッシュキーを構成すると、そのハッシュが再生成され、それによってキャッシュキーが更新されます。公式の[依存関係キャッシングリファレンス](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching#example-using-the-cache-action)では、キャッシュキーの一部として`hashFiles`を使用する方法が示されています。
- [ ] `hashFiles`は、Windowsランナーとの互換性のために必須です。
- [ ] キャッシュキーの一部として`hashFiles`を使用すると、キャッシュミスが発生した場合に追加のデバッグ情報が提供されます。
- [ ] キャッシュキーの一部として`hashFiles`を使用すると、呼び出し元ワークフローで追加のステップが生成されます。このワークフローステップは、参照目的でキャッシュキーのSHA-256ハッシュ値を出力します。
> キャッシュキーのハッシュを作成することは、ほとんどの状況では有用ではありません。
