((global) ->
  jsList =
    jquery: 'js/lib/jquery-2.0.3.min.js',
    jqueryui: 'js/lib/jquery-ui-1.10.3.custom.min.js'

  loadList = (libList, callBack) ->
    jsName = jsList[libList.shift()]
    $LAB.script(jsName).wait( ->
      if libList.length is 0
        do callBack
        return
      else
        loadList(libList, callBack) 
    )
    return

  loadJquery = () ->
    loadList(['jquery', 'jqueryui'], () ->
      $('#button').button()
      return
    )
    return
  
  do loadJquery
  return
)(this)
