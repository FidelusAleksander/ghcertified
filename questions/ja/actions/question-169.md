---
question: "Manuela は、IP アドレスとの通信が厳しく制限された組織向けにセルフホストランナーを設定しています。セルフホストランナーが GitHub と通信できるようにするにはどうすればよいですか？"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list"
---

- [x] セルフホストランナーの IP アドレスを組織の IP 許可リストに追加する  
> セルフホストランナーは、[ドキュメント](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/runners/self-hosted-runners#communication)にあるように、さまざまな活動を行うために GitHub と通信します。この通信を許可するには、セルフホストランナーの IP アドレスを IP 許可リストに追加する必要があります。
- [ ] セルフホストランナーのオペレーティングシステムを組織のオペレーティングシステム許可リストに追加する  
- [ ] `.ip-exception` ファイルをセルフホストランナーのディレクトリ構造のトップレベルに追加する  
- [ ] GitHub ホストの標準ランナーに切り替える。IP 許可リストが有効になっている場合、セルフホストランナーはブロックされるため  
- [ ] 組織の IP 許可リスト設定で「Allow access from self-hosted runners」チェックボックスを選択する  
