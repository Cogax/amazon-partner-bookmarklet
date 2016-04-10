(function() {
  /**
   * First we need to check if jQuery alredy installed on that Page. If it isn't
   * we need to import the jQuery library.
   */
  var jQueryVersion = '1.11.2';
  if(window.jQuery === undefined || window.jQuery.fn.jquery < jQueryVersion) {
    var done = false;
    var script = document.createElement("script");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/' + jQueryVersion + '/jquery.min.js';
    script.onload = script.onreadystatechange = function() {
      if(!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
        done = true;
        initBookmarklet();
      }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  } else {
    initBookmarklet();
  }


  function initBookmarklet() {
    (window.amazonBookmarklet = function() {

      alert($("b:contains('ISBN-10:')").parent().text());


    })();
  }
})();