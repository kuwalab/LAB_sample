((global) ->
  jsList =
    jquery: 'js/lib/jquery-2.0.3.min.js',
    jqueryui: 'js/lib/jquery-ui-1.10.3.custom.min.js'

  # ライブラリの名称の配列を渡す
  # ライブラリをすべて読み込んだあと、callBackが実行される
  # ライブラリはすべてwaitで読み込むため、遅い
  # あくまでもプロトタイプ作成用
  syncLoadLib = (libList, callBack) ->
    jsName = jsList[libList.shift()]
    $LAB.script(jsName).wait( ->
      if libList.length is 0
        do callBack
        return
      else
        syncLoadLib(libList, callBack)
    )
    return

  global.syncLoadLib = syncLoadLib

  return
)(this)
