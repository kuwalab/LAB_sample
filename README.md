# 概要
HTMLプロトタイプを作成する際にJavaScriptでちょっとしたユーティリティを使うことがあります。

普通はjQuery等のライブラリーを用いるのですが、読み込むライブラリーのバージョンを統一したいことが多いです。
また、同じようなscriptの読み込みを何箇所も書くのは面白くありません。

個人的に、キャッシュの意味もありJavaScriptのライブラリーにはバージョン番号をつけて管理することが多いです。
バージョン番号を記載することで、いざ違うバージョンのライブラリーを導入した場合には、すべての箇所の修正が必要になります。

最初は自作でJavaScriptの動的ロードを考えていましたが、[LABjs](http://getify.github.io/LABjs/)という優秀なライブラリーを見つけたので、それを用いた共通のライブラリーのロードの仕組みを作成しました。

# ライセンス
MIT

# 参考
以下の書籍、サイトを参考にしています。

* [LABjs](http://getify.github.io/LABjs/)
* [ページ読み込み時間を短縮するJavaScriptローダー：LABjs | ゆっくりと…](http://tokkono.cute.coocan.jp/blog/slow/index.php/xhtmlcss/loading-and-blocking-javascript-labjs/)
