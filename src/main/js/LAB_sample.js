(function(global) {
  var jsList, loadJquery, loadList;
  jsList = {
    jquery: 'js/lib/jquery-2.0.3.min.js',
    jqueryui: 'js/lib/jquery-ui-1.10.3.custom.min.js'
  };
  loadList = function(libList, callBack) {
    var jsName;
    jsName = jsList[libList.shift()];
    $LAB.script(jsName).wait(function() {
      if (libList.length === 0) {
        callBack();
      } else {
        return loadList(libList, callBack);
      }
    });
  };
  loadJquery = function() {
    loadList(['jquery', 'jqueryui'], function() {
      $('#button').button();
    });
  };
  loadJquery();
})(this);
